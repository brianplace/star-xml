import * as OAGIS from '../oagis_namespace';
import * as BasicTypes from '../../basic_types/basic_types';

export interface ResponseExpressionType extends OAGIS.TokenType {
    get actionCode(): BasicTypes.IRequired<BasicTypes.IAttribute<OAGIS.ResponseActionCodeContentType>>;
    get expressionLanguage(): BasicTypes.IAttribute<OAGIS.TokenType>;
}