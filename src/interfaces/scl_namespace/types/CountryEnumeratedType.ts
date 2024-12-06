import * as SCL from '../scl_namespace';

/**Country in which the Address is in. Conforms to ISO 3166-2 Alpha-2 and Alpha-3 codes */
export type CountryEnumeratedType = SCL.TwoLetterCountryEnumType | SCL.ThreeLetterCountryEnumType;