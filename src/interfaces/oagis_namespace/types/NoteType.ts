import * as OAGIS from '../oagis_namespace';
import * as BasicTypes from '../../basic_types/basic_types';

export interface NoteType extends OAGIS.DescriptionType {
    get author(): BasicTypes.IAttribute & OAGIS.StringType;
    get entryDateTime(): BasicTypes.IAttribute & OAGIS.DateTimeType;
    get status(): BasicTypes.IAttribute & OAGIS.StringType;
}