import * as UDT from '../../udt_namespace/udt_namespace';
import * as BasicTypes from '../../basic_types/basic_types';
import * as OAGIS from '../oagis_namespace';

export interface DescriptionType extends UDT.ITextType {
    get type(): BasicTypes.IAttribute<OAGIS.NormalizedStringType>;
}