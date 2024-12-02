import * as OAGIS from '../oagis_namespace';

export interface StateChangeType {
    get FromStateCode(): OAGIS.StateCodeType;
    get ToStateCode(): OAGIS.StateCodeType;
    get ChangeDateTime(): OAGIS.DateTimeType;
    get FreeFormTextGroup(): OAGIS.FreeFormTextGroup;
}