import * as OAGIS from '../oagis_namespace';

export interface ResponseActionCriteriaType {
    get ResponseExpression(): OAGIS.ResponseExpressionType;
    get ChangeStatus(): OAGIS.ChangeStatusType;
}