import * as OAGIS from '../oagis_namespace';

export interface FreeFormTextGroup {
    get Description(): Iterable<OAGIS.DescriptionType>;
    get Note(): Iterable<OAGIS.NoteType>;
}