import * as OAGIS from '../oagis_namespace';

export interface ChangeStatusType extends OAGIS.StatusBasisType {
    get StateChange(): Iterable<OAGIS.StateChangeType>;
}