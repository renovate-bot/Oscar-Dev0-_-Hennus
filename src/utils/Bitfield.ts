import { HennusError, errorCodes } from "./Errors";

export class BitField<N extends number | bigint> {

    static Flags: EnumLike<unknown, number | bigint> = {};

    static DefaultBit: bigint = BigInt(0);
    public bitfield: N;

    constructor(_bits: BitFieldResolvable< N> = BitField.DefaultBit as N) {
        this.bitfield = BitField.resolve(_bits);
    };

    add(...bits: BitFieldResolvable<N>[]) {
        let total = BitField.resolve(BitField.DefaultBit);
        for (const bit of bits) total |= BigInt(BitField.resolve(bit));

        if (Object.isFrozen(this)) return new BitField<N>((BigInt(this.bitfield) | total) as BitFieldResolvable<N>);
        //@ts-ignore
        this.bitfield |= total;
        return this;
    };

    remove(...bits: BitFieldResolvable<N>[]) {
        let total = BitField.DefaultBit;
        for (const bit of bits) total |= BigInt(BitField.resolve(bit));

        if (Object.isFrozen(this)) return new BitField(BigInt(this.bitfield) & ~total);
        //@ts-ignore
        this.bitfield &= ~total;
        return this;
    };


    has(bit: BitFieldResolvable<N>): boolean {
        const resolvedBit = BitField.resolve(bit);
        return (this.bitfield & resolvedBit) === bit;
    };

    freeze(): Readonly<BitField<N>> {
        return Object.freeze(this);
    };

    toArray(...hasParams: any[]): string[] {
        return [...this[Symbol.iterator](...hasParams)];
    };

    toJSON() {
        return typeof this.bitfield === 'number' ? this.bitfield : this.bitfield.toString();
    };

    valueOf() {
        return this.bitfield;
    };


    *[Symbol.iterator](...hasParams: any[]): Generator<string> {
        for (const bitName of Object.keys(BitField.Flags)) {
            //@ts-ignore
            if (isNaN(Number(bitName)) && this.has(bitName, ...hasParams)) yield bitName;
        }
    }

    static resolve<N extends number | bigint>(bit: BitFieldResolvable<N>): N {
        const { DefaultBit, Flags } = this;
        if (typeof bit == "bigint" && bit >= DefaultBit) return bit as N;
        if (bit instanceof BitField) return bit.bitfield as N;
        if (Array.isArray(bit)) return bit.map(bit_ => this.resolve(bit_)).reduce((prev, bit_) => prev | bit_, DefaultBit) as N;


        if (typeof bit === 'string') {
            if (!isNaN(Number(bit))) return (typeof DefaultBit === 'bigint' ? BigInt(bit) : Number(bit)) as N;
            if (Flags[bit as keyof typeof Flags] !== undefined) return Flags[bit as keyof typeof Flags];
        };

        throw new HennusError(errorCodes.BitsError);
    };
};

export type BitFieldResolvable<N extends number | bigint> =
    | RecursiveReadonlyArray<| N | `${bigint}` | string | Readonly<BitField<N>>>
    | N
    | string
    | `${bigint}`
    | Readonly<BitField< N>>;

export type RecursiveReadonlyArray<T> = ReadonlyArray<T | RecursiveReadonlyArray<T>>;

export type EnumLike<E, V> = Record<keyof E, V>;