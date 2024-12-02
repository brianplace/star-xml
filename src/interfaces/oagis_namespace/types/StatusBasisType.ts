import * as OAGIS from '../oagis_namespace';

export interface StatusBasisType {
    get Code(): OAGIS.CodeType;
    get Description(): OAGIS.DescriptionType;
    get EffectiveDateTime(): OAGIS.DateTimeType;
    get ReasonCode(): OAGIS.CodeType;
    get Reason(): Iterable<OAGIS.TextType>;
}