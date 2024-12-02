import * as BasicTypes from '../../basic_types/basic_types';
import * as OAGIS from '../oagis_namespace';

/**Allows any digital Signatures to be added to the Instance of the BOD Instance in order to sign for any portion of the BOD content */
export interface SignatureType {
    get qualifyingAgencyId(): BasicTypes.IAttribute<OAGIS.NormalizedStringType>;
}