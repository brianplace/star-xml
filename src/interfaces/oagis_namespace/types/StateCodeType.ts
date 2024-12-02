import * as OAGIS from '../oagis_namespace';
import * as BasicTypes from '../../basic_types/basic_types';

export interface StateCodeType extends OAGIS.StateCodeContentType {
    get CodeListAttributeGroup(): BasicTypes.IAttribute<OAGIS.CodeListAttributeGroup>;
}