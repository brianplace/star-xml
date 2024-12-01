import * as BasicTypes from '../basic_types/basic_types';
import * as UDT from '../udt_namespace/udt_namespace';
import * as QDT from '../qdt_namespace/qdt_namespace';
import * as SQDT from '../sqdt_namespace/sqdt_namespace';
import * as SCL from '../scl_namespace/scl_namespace';
import * as OACL from '../oacl_namespace/oacl_namespace';
import * as OAGIS from '../oagis_namespace/oagis_namespace';

/**Show Vehicle Inventory */
export interface IShowVehicleInventoryType extends IBusinessObjectDocumentType {
    get ShowVehicleInventoryDataArea(): IShowVehicleInventoryDataAreaType;
}

/**The schema based inheritance for all BODs.  The logical model woudl also include the DataArea */
export interface IBusinessObjectDocumentType {
    /**Provides the information that an application may need to know in order to communicate in an integration of two or more business applications.  
     * The ApplicationArea is used at the application layer of communication.  
     * While the integration frameworks web services and middleware provide the communication layer that OAGIS operates on top of */
    get ApplicationArea(): BasicTypes.IRequired<IApplicationAreaType>;
    /**STAR Release this BOD Instances belongs.  
     * This should contain the STAR repository version in the following recommended format.  
     * 5.1.4_M20080328.  
     * Where the first part indicates the version of the STAR repository and anything after the "_" indicates the Milestone build that is being used.  
     * If referring to an official published version then only the STAR Repository version is required */
    get releaseID(): BasicTypes.IRequired<BasicTypes.IAttribute<UDT.IString>>;
    /**Recommended to use releaseID to identify the repository and noun.  Indicates the version of the given BOD definition */
    get versionID(): BasicTypes.IDeprecated<BasicTypes.IAttribute<UDT.IString>>;
    /**Indicates whether this BOD is being sent in a "Test" or a "Production" mode.  
     * Default="Production" */
    get systemEnvironmentCode(): BasicTypes.IAttribute<OACL.ISystemEnvironmentCodeContentType>;
    /**Indicates the language that the contents of the BOD is in unless otherwise stated.  
     * Default="en-US" */
    get languageCode(): BasicTypes.IAttribute<SCL.ILanguageEnumeratedType>;
}

export interface IApplicationAreaType {
    /**This identifies characteristics and control identifiers that relate to the application that created the Business Object Document */
    get Sender(): BasicTypes.IRequired<ISenderType>;
    /**This is used as the creation moment of this Business Object Document */
    get CreationDateTime(): BasicTypes.IRequired<UDT.IDateTimeType>;
    /**If the BOD is to be signed the signature element is included, otherwise it is not.  Signature supports any digital signature that may be used by an implementation of OAGIS.  The qualifying Agency identifies the agency that provided the format for the signature */
    get Signature(): OAGIS.ISignature;
    /**The BODId provides a place to carry a Globally Unique Identifier (GUID) that will make each Business Object Document instance uniquely identifiable. 
     * This is a critical success factor to enable software developers to use the Globally Unique Identifier (GUID) to build services or capabilities*/
    get BODID(): UDT.IIdentiferType;
    /**This identifies characteristics and control identifiers that relate to the application that receives the Business Object Document. */
    get Destination(): BasicTypes.IRequired<IDestinationType>;
}

/**This identifies characteristics and control identifiers that relate to the application that created the Business Object Document. */
export interface ISenderType extends ISenderBaseType {
    /**DCS Software Creator Code */
    get CreatorNameCode(): BasicTypes.IRequired<UDT.ITextType>;
    /**Additional information about the sending platform */
    get SenderNameCode(): BasicTypes.IRequired<UDT.ICodeType>;
    /**Physical address of the sender */
    get URI(): QDT.IURIType;
    /**Dealer Code of source of information */
    get DealerNumberID(): UDT.IIdentiferType;
    /**Dealer code store number */
    get StoreNumber(): UDT.ITextType;
    /**Dealer code area number */
    get AreaNumbeR(): UDT.ITextType;
    /**Source Dealer country location */
    get DealerCountryCode(): SCL.ICountryEnumeratedType;
    /**This code is used to define the language of the data used in this transaction */
    get LanguageCode(): SQDT.ILanguageCodeType;
    /**Indicates if the user requests to receive pending mail that has been stored and has not been delivered yet. */
    get DeliverPendingMailIndicator(): UDT.IIndicatorType;
    /**Token for application specific authentication.  Used to authenticate dealership/users through application specific security */
    get Password(): UDT.ITextType;
    /**The sender's software version number */
    get SystemVersion(): QDT.IStringType;
    /**The party ID field uniquely identifies the Sender of the message.  This element can be used for parties wtihin the Automotive Community as well as external parties.  Party Id is not intended as a replacement for the Dealer Number. */
    get PartyID(): UDT.IIdentiferType;
    /**The Location Id field uniquely identifies the location of the Sender of a message. 
     * This Id may be aligned with a physical address or data centers. 
     * This field provides an additional level of granularity beyond the usage of the Party Id for additional routing and deliver of data. */
    get LocationID(): UDT.IIdentiferType;
    /**The Service Id field identifies the particular service from which a message is being sent, e.g., an inventory service */
    get ServiceID(): UDT.IIdentiferType;
    /**The number of nouns that are included in the BOD */
    get NounCountNumeric(): UDT.INumericType;
}

/**Identifies the sender of the given BOD instance */
export interface ISenderBaseType {
    /**This is the logical location of the server and application from which the Business Object document originated */
    get LogicalID(): UDT.IIdentiferType;
    /**DCS software code name */
    get ComponentID(): UDT.IIdentiferType;
    /**This describes the business event that initiated the need for the Business Object document to be created */
    get TaskID(): UDT.IIdentiferType;
    /**Enables the sending application to indicate the instance identifier of the event or task that caused the BOD to be created. 
     * This is used to correlate a response BOD to an originating BOD. 
     * The Sender of the originating application will populate the Reference Id with business level information. 
     * Reference ID does not have to be a GUID. It must be a locally unique application value for the transaction type, for example a database sequence number. 
     * The receiving application puts the value in Reference ID of the incoming message in the Reference ID of any acknowledgement messages. 
     * The Reference Id will not be required to tie two collaborations together such as Parts Order and Parts Shipment. */
    get ReferenceID(): UDT.IIdentiferType;
    get ConfirmationCode(): SCL.IConfirmationEnumeratedType;
    /**Identifies the authorization level of the user or application that is sending the Business Object Document Message.  Used as User ID */
    get AuthorizationID(): UDT.IIdentiferType;
}

export interface IDestinationType {
    /**Code for destination of file */
    get DestinationNameCode(): UDT.ICodeType;
    /**Physical address of the destination */
    get DestinationURI(): QDT.IURIType;
    /**Additional information about the destination application */
    get DestinationSoftwareCode(): UDT.ITextType;
    /**For which software destiantion file is inteded */
    get DestinationSoftware(): UDT.ITextType;
    /**Target Dealer Code receiving information */
    get DealerNumberID(): UDT.IIdentiferType;
    /**Dealer code store number */
    get StoreNumber(): UDT.ITextType;
    /**Dealer code area number */
    get AreaNumber(): UDT.ITextType;
    /**Target Dealer country location */
    get DealerTargetCountry(): SCL.ICountryEnumeratedType;
    /**The Party Receiver Id field uniquely identifies the Receiver of the message. 
     * This element can be used for parties within the Automotive Community as well as external parties. 
     * Party Id is not intended as a replacement for the Dealer Number. 
     * Suggested formats for OEMs or other large institutions include: DUNs Number, ShortMfgCode + DUNs, or ShortMfgCode. 
     * The suggested format for Dealers is: ShortMfgCode+Dealer Number. */
    get PartyReceiverID(): UDT.IIdentiferType;
    /**The Location Receiver Id field uniquely identifies the location of the Receiver of a message. 
     * This Id may be aligned with a physical address or data centers. 
     * This field provides an additional level of granularity beyond the usage of the Party Id for additional routing and deliver of data. */
    get LocationReceiverID(): UDT.IIdentiferType;
    /**The Service Message Id field identifies the particular service to which a message is being sent, e.g., an inventory service. */
    get ServiceMessageID(): UDT.IIdentiferType;
}

/**Show Vehicle Inventory Data Area */
export interface IShowVehicleInventoryDataAreaType {
    /**The Show verb is used when sending the information about a specific instance of a business document or entity. 
     * The Show verb may be used to respond to a Get request or it can be used in a publish scenario, 
     * where it pushes information to other applications based on a business event.
     * Although BODs based on this verb do not commonly cause updates to occur, there may be times when the component receiving the Show decides to use the information it receives to update. 
     * This is entirely the decision of the receiving software component and is not forbidden.
     * The behavior of the Show verb is quite straight forward with one exception. 
     * The Show response to any Get request needs to read the request carefully to ensure the response is returning the requested Data Types. */
    get Show(): IShowType;
    /**VehicleInventory supports the transmission of  Vehicle Inventory information to the dealership. 
     * Vehicle Inventory is the task of sending the Vehicle Inventory information electronically between Dealer and OEM systems.  */
    get VehicleInventory(): Iterable<IVehicleInventoryType>
}

export interface IShowType extends IResponseVerbType {
    get recordSetStartNumber(): BasicTypes.IAttribute<OAGIS.IPositiveIntegerNumericType>;
    get recordSetCount(): BasicTypes.IAttribute<OAGIS.IPositiveIntegerNumericType>;
    get recordSetTotle(): BasicTypes.IAttribute<OAGIS.IPositiveIntegerNumericType>;
    get recordSetCompleteIndicator(): BasicTypes.IAttribute<UDT.IIndicatorType>;
    get recordSetReferenceId(): BasicTypes.IAttribute<QDT.INormalizedStringType>;
}

export interface IResponseVerbType extends OAGIS.IVerbType {
    /**A copy of the ApplicationArea for the original BOD that was processed. 
     * Present either as additional reference information, or for use in identifying the BOD in situations where a BODReference is not known. */
    get OriginalApplicationArea(): IApplicationAreaType;
    /**ResponseCriteria identifies the content that is returned, given a Get query success or the response from the Process. 
     * In essence, the expression here has the effect of filtering the part(s) of the found element(s) that are to be returned. 
     * ReturnCriteria plays no role in the query itself or the process. That is handled as a match against the request BOD's noun exemplar. 
     * ReturnCriteria allows the sender of the BOD to indicate which information (down to the field level) is requested to be returned, 
     * given that the query has been successful in matching the exemplar to existing nouns. 
     * That is, in a GetListPurchaseOrder, if one or more PurchaseOrders with a TotalPrice = $1M were found, 
     * ReturnCriteria tells the BOD recipient which parts of the PurchaseOrder should be populated with content when the response (ShowPurchaseOrder) is formulated. 
     * The expressionLanguage indicates the expression language being used. In order for the ReturnCriteria expression to be evaluable by the BOD recipient, 
     * the recipient must be capable of processing and interpreting the specified expression language. XPath is the default, due to its ubiquity among XML processing technologies. */
    get ResponseCriteria(): Iterable<OAGIS.IResponseCriteria>
}

export interface IVehicleInventoryType {
    /**Vehicle Inventory Header */
    get VehicleInventoryHeader(): IVehicleInventoryHeaderType;
    /**Deprecated: Use VehicleInventoryInvoice.  
     * This field was deperecated to align with the naming and design rules.   
     * This is left in for compatibility reasons, but will be removed in the next major version of STAR. */
    get Invoice(): BasicTypes.IDeprecated<Iterable<IVehicleInventoryInvoiceType>>;
    /**Detailed information regarding a vehicle in inventory. */
    get VehicleInventoryInvoice(): Iterable<IVehicleInventoryInvoiceType>;
}

export interface IVehicleInventoryHeaderType extends IHeaderBaseType {
    /**Date of invoice */
    get InvoiceDate(): UDT.IDateType;
    /**Type of transaction */
    get TransactionTypeCode(): SCL.ITransactionTypeEnumeratedType;
    /**The party to which good or services were sold. */
    get SoldToParty(): IPartyABIEType;
    /**The party receiving the goods or services. */
    get ShipToParty(): IPartyABIEType;
    /** The person or organization that manufactures an item.*/
    get ManufacturerParty(): IPartyABIEType;
}

export interface IHeaderBaseType {
    /**Is the date and time the document was last created. This is not the date and time that the BOD message instance was created. */
    get DocumentDateTime(): UDT.IDateTimeType;
    /**Secondary password used to validate access to the dealer information */
    get SecondaryPassword(): UDT.ITextType;
    /**Identifies secondary dealer number if different than primary "Dealer Number" */
    get SecondaryDealerNumberID(): UDT.IIdentiferType;
    /**A group of identifications that uniquely identifies this document */
    get DocumentIdentificationGroup(): BasicTypes.IRequired<IDocumentIdentificationGroupType>;
}

/**A list of identifications related to a particular document */
export interface IDocumentIdentificationGroupType {
    /**A group of identifications that uniquely identifies this document */
    get DocumentIdentification(): BasicTypes.IRequired<IDocumentIdentificationType>;
    /**An alternate identification that uniquely identifies this document in addition to the Document ID, e.g., Part Order Number, Parts Purchase Order Number or Parts Invoice Number. */
    get AlternateDocumentIdentification(): Iterable<IDocumentIdentificationType>;
}

/**An identifier for this document */
export interface IDocumentIdentificationType {
    /**The DocumentID is the identifier for the document. This identifier is a GUID or other unique identifier set by the creator of the document. */
    get DocumentID(): BasicTypes.IRequired<UDT.IIdentiferType>;
    /**The agency role that defined the Document ID. An example of an agency may be a manufacturer, a retail system provider, etc. This list does not contain specific entity names, only roles. See enumerated list. */
    get AgencyRoleCode(): SQDT.IAgencyRoleCodeType;
} 

export type IPartyABIEType = IPartyABIETypeOrganization | IPartyABIETypePerson;

/**This is the base Party component based off of the Uncefact Core Component */
export interface IPartyABIETypeBase {
    /**Party identification number used to uniquely identify a party for example Dealer ID, Fleet, Customer Number assigned by OEM,etc. */
    get PartyID(): Iterable<UDT.IIdentiferType>;
    /**Code identifying a physical location */
    get LocationID(): UDT.IIdentiferType;
    /**The Dealer Management System ID assigned to a party */
    get DealerManagementSystemID(): UDT.IIdentiferType;
    get AuthorizationID(): UDT.IIdentiferType;
    /**Indicates the Business Party's relationship to the primary party */
    get RelationshipTypeCode(): UDT.ICodeType;
    /**Any special remarks regarding a party */
    get SpecialRemarksDescription(): Iterable<UDT.ITextType>;
    /**An alternate identification that uniquely identifies this document in addition to the Document ID, e.g., Part Order Number, Parts Purchase Order Number or Parts Invoice Number. */
    get AlternatePartyDocument(): Iterable<IDocumentIdentificationType>;
    /**Any privacy rights the party has subscribed to or opted out of */
    get Privacy(): Iterable<IPrivacyType>;
    /**Preferred language */
    get PreferredLanguageCode(): SQDT.ILanguageCodeType;
    /**The number assigned to the customer by the manufacturer's systems */
    get ManufacturerCustomerID(): UDT.IIdentiferType;
    /**The number assigned to the customer's household by the manufacturer's systems */
    get ManufacturerHouseholdID(): UDT.IIdentiferType;
    /**An action taken for an event by or in behalf of the party. This can be used to track the creation of the party, deletion, or end date. This action is dirrectly related to the party. */
    get PartyActionEvent(): Iterable<IEventType>;
    /**Part flag indicating that part was sold to another dealer */
    get DealerIndicator(): UDT.IIndicatorType;
}

export interface IPartyABIETypeOrganization extends IPartyABIETypeBase {
    /**A specific organization represented in a party, or other component. */
    get SpecifiedOrganization(): IOrganizationABIEType;
}

export interface IPartyABIETypePerson extends IPartyABIETypeBase {
    /**Identifies a specific individual or person. */
    get SpecifiedPerson(): IPersonType;
}

/**A collection of data for a piece of written, printed or electronic matter that provides information or evidence */
export interface IDocumentABIEType {
    /**The DocumentID is the identifier for the document. This identifier is a GUID or other unique identifier set by the creator of the document. */
    get DocumentID(): UDT.IIdentiferType;
    /**A code specifying the agency type issuing the document */
    get DocumentType(): SQDT.IAssigningOrganizationPartyIdType;
    /**An issuing name for this document like a state, or other agency */
    get IssuingName(): UDT.ITextType;
    /**The period which this document is effective */
    get EffectivePeriod(): IPeriodABIEType;
}

/**A specific period of time such as the length of time between two known date/time points, from a start date onwards, or up to an end date. */
export interface IPeriodABIEType {
    /**The measure of the length of time for this time period. */
    get DurationMeasure(): SQDT.ITimeMeasureType;
    /**The indication of whether or not the start and end dates are included in this period */
    get InclusiveIndicator(): UDT.IIndicatorType;
    /**The date, time, date time or other date time value for the start of this period of time */
    get StartDateTime(): UDT.IDateTimeType;
    /**A date, time, date time or other date time value which specifies the end of this period of time */
    get EndDateTime(): UDT.IDateTimeType;
    /**The date, time, date time or other date time value for a complete period of time expressed as a specific month, a specific week etc. type code for a particular Bulletin */
    get CompleteDateTime(): UDT.IDateTimeType;
    /**The indication of whether or not an entity is open during this period */
    get OpenIndicator(): UDT.IIndicatorType;
    /**The DayOfWeek component is used to identify availability based on days of the week */
    get DayOfWeekCode(): SQDT.IDayOfWeekCodeType;
}

/**The Organization component is based on the UNCEFACT Organization Core Component. */
export interface IOrganizationABIEType {
    /**A code identifying type of Business. */
    get BusinessTypeCode(): UDT.ICodeType;
    /**Company name of business entity */
    get CompanyName(): UDT.INameType;
    /**Member identification number of affiliate organization */
    get OrganizationID(): UDT.IIdentiferType;
    /**An identifier for the district an organization resides */
    get DistrictID(): UDT.IIdentiferType;
    /**Manufacturer branch code */
    get BranchCode(): UDT.ICodeType;
    /**Manufacturer company code */
    get CompanyCode(): UDT.ICodeType;
    /**Manufacturer division code */
    get DivisionCode(): UDT.ICodeType;
    /**The company that is securing or underwriting the loan */
    get HoldingCompanyName(): UDT.INameType;
    /**A primary person or department that acts as a point of contact with another peson or department. */
    get PrimaryContact(): Iterable<IContactABIEType>;
    /**The location at which mail is delivered */
    get PostalAddress(): Iterable<IAddressABIEType>;
    get DoingBusinessAsName(): UDT.ITextType;
    /**The code specifying the legal classification of this organization such as those representing Incorporated, Limited Liability Corporation, or non-profit */
    get LegalClassificationCode(): UDT.ICodeType;
    /**The creation date and time that a business was started */
    get InceptionDateTime(): UDT.IDateTimeType;
    /**Number of employees in the organization */
    get NumberOfEmployeesNumericT(): UDT.INumericType;
    /**Full description of the company or organization. */
    get CompanyDescription(): Iterable<UDT.ITextType>;
}

export type IContactABIEType = IContactABIETypePersonName | IContactABIETypeSpecifiedPerson;

/**A person or department that acts as a point of contact with another person or department */
export interface IContactABIETypeBase {
    /**A unique identifier for this contact */
    get ID(): Iterable<UDT.IIdentiferType>;
    /**The job title, position or designation, expressed as text, of this contact person within an organization such as Director, Software Engineer, Purchasing Manager. */
    get JobTitle(): UDT.ITextType;
    /**The responsibilities, expressed as text, of this contact */
    get Responsibility(): UDT.ITextType;
    /**The name, expressed as text, of the department to which this ocntact belongs within an organization such as a support department. */
    get DepartmentName(): UDT.ITextType;
    /** A code specifying the type of contact */
    get TypeCode(): UDT.ICodeType;
    /**Telephone communication information for this contact */
    get TelephoneCommunication(): Iterable<ICommunicationABIEType>
    /**The preference for usage of this contact such as type, order of importance, availability, or some other criteria */
    get UsagePreference(): IPreferenceABIEType; 
    /**Postal address information for this contact */
    get PostalAddress(): IAddressABIEType;
    /**Fax communication information for this contact */
    get FaxCommunication(): Iterable<ICommunicationABIEType>;
    /**Uniform Resource Identifier (URI) communication information for this contact such as an email address */
    get URICommunication(): Iterable<ICommunicationABIEType>;
    /**Indicates the preferred method of contact */
    get ContactMethodTypeCode(): SQDT.IContactMethodTypeCodeType;
}

export interface IContactABIETypePersonName extends IContactABIETypeBase {
    /**The name, expressed as text, of this contact person */
    get PersonName(): UDT.ITextType;
}

export interface IContactABIETypeSpecifiedPerson extends IContactABIETypeBase {
    /**Identifies a specific individual or person */
    get SpecifiedPerson(): IPersonType;
}

/**The Person component is based off the UNCEFACT Person Core Component */
export interface IPersonType {
    get ID(): Iterable<UDT.IIdentiferType>;
    get GivenName(): Iterable<UDT.INameType>;
    /**Another name that person is also known */
    get Alias(): UDT.ITextType;
    /**Middle Initial of business party */
    get MiddleName(): UDT.INameType;
    get FamilyName(): Iterable<UDT.INameType>;
    /**A general or descriptive heading given to a person or item */
    get Title(): UDT.ITextType;
    /**A word or phrase of greeting used to begin a letter or message */
    get Salutation(): UDT.ITextType;
    /**A word or phrase added to the end of a name */
    get NameSuffix(): UDT.ITextType;
    /**Identifies marital status of business party */
    get MaritalStatusCode(): SCL.IMaritalStatusEnumeratedType;
    /**Gender of party */
    get GenderCode(): SCL.IGenderEnumeratedType;
    /**Birth Date of party */
    get BirthDate(): UDT.IDateType;
    /**The numeric value of a person or parties age */
    get AgeMeasure(): SQDT.ITimeMeasureType;
    /**The family name for a woman before she was married */
    get MaidenName(): UDT.ITextType;
    /**A name that a person prefers to be known */
    get PreferredName(): UDT.ITextType;
    /**The location at which a particular person may be found or reached */
    get ResidenceAddress(): IAddressABIEType;
    /**Telephone communiation information like phone number */
    get TelephoneCommunication(): Iterable<ICommunicationABIEType>;
    /**Fax communication includes fax number or mailto address */
    get FaaxCommunication(): ICommunicationABIEType;
    /**Email or web communication */
    get URICommunication(): Iterable<ICommunicationABIEType>;
    /**The ISO Country Codelist used to indicate a person's nationality */
    get NationalityCountryID(): SQDT.ICountryCodeType;
    /**Indicates the preferred method of contact */
    get ContactMethodTypeCode(): SQDT.IContactMethodTypeCodeType;
    /**The spoken language for a person.  This may occur multiple times if they speak for than one langauge */
    get LanguageCode(): Iterable<SQDT.ILanguageCodeType>;
    /**The location at which mail is delivered */
    get PostalAddress(): Iterable<IAddressABIEType>;
    /**Original contact method for this person */
    get OriginalContactMethodTypecode(): SQDT.IContactMethodTypeCodeType;
    /**Occupation for this person */
    get SpecifiedOccupation(): Iterable<IOccupationABIEType>
    /**Personal trait */
    get Trait(): Iterable<ITraitType>;
    /**Code which indicates the customer status of the person */
    get CustomerStatusCode(): UDT.ICodeType;
    /**Number of days tolerance for recorded date of birth */
    get DateOfBirthToleranceNumeric(): UDT.INumericType;
}

export type IAddressABIEType = IAddressABIETypeStructured | IAddressABIETypeUnstructured;

/**A common address format */
export interface IAddressABIETypeBase {
    /**A unique identifier for this address */
    get AddressID(): UDT.IIdentiferType;
    /**A code specifying the type of this address such as business address or home address */
    get AddressType(): UDT.ICodeType;
    /**The person or business entity that the information should be sent */
    get AttentionOf(): Iterable<UDT.ITextType>;
    /**Used to send mail to someone at some else's address */
    get CareOf(): Iterable<UDT.ITextType>;
    /**Actual property name is CitySub-DivisionName.  A textual representation of the City Sub-Division Name of the address */
    get CitySubDivisionName(): Iterable<UDT.ITextType>;
    /**A textual representation of the city of the address */
    get CityName(): UDT.ITextType;
    /**A unique country identifier of this address */
    get CountryID(): SQDT.ICountryCodeType;
    /**A code specifying the Post Code for this address */
    get Postcode(): UDT.ICodeType;
    /**Actual property name is StateOrProvinceCountrySub-DivisionID.  State or province */
    get StateOrProvinceCountrySubDivisionID(): UDT.IIdentiferType;
    /**Actual property name is CountyCountrySub-Division.  A county or other regional jurisdiction within a country, state, or province */
    get CountyCountrySubDivision(): UDT.ITextType;
    /**A date and time that the Address was last updated */
    get AddressUpdateDateTime(): UDT.IDateTimeType;
    /**Use to record permission to use this address */
    get Privacy(): Iterable<IPrivacyType>;
    /**The code specifying the use of this communication such as for business purposes or private.  Such as Home or Work address */
    get UseCode(): UDT.ICodeType;
    /**Add city codes or standardized city acronyms or abbreviations */
    get CityNameAbbreviation(): Iterable<UDT.ICodeType>;
}

export interface IAddressABIETypeStructured extends IAddressABIETypeBase {
    /**A free formatted text line, typically used to by an address */
    get LineOne(): UDT.ITextType;
    /**A free formatted text line, typically used to by an address */
    get LineTwo(): UDT.ITextType;
    /**A free formatted text line, typically used to by an address */
    get LineThree(): UDT.ITextType;
    /**A free formatted text line, typically used to by an address */
    get LineFour(): UDT.ITextType;
    /**A free formatted text line, typically used to by an address */
    get LineFive(): UDT.ITextType;
}

export interface IAddressABIETypeUnstructured extends IAddressABIETypeBase {
    /**The number, expressed as text, of a building or house on a street at this address */
    get BuildingNumber(): UDT.ITextType;
    /**The name, expressed as text, of a building, a house, or other structure on a street at this address */
    get BuildName(): UDT.ITextType;
    /**The name, expressed as text, of a street or throughfare */
    get StreetName(): UDT.ITextType;
    /**The identification by name or number, exprsesed as text, of the floor in a building as part of an address */
    get FloorIdentification(): UDT.ITextType;
    /**The unique identifier, expressed as text, of a container commonly referred to as a box, in a post office or other postal sevice location, assigned to a person or organization, where postal items may be kept for this address */
    get PostOfficeBox(): UDT.ITextType;
    /**The building number suffix of the address */
    get BuildingNumberSuffix(): UDT.ITextType;
}

export interface IPrivacyType {
    /**Indicator to note that Business Party has requested to share or not share information with third parties. */
    get PrivacyIndicator(): UDT.IIndicatorType;
    /**Code identifying a Party's authorized privacy rights */
    get PrivacyTypeString(): QDT.IStringType;
    /**The start and end dates for the period that privacy should be applied */
    get PrivacyPeriod(): IPeriodABIEType;
}

/**The exchange of thoughts, messages, or information, as by speech, signals, writing, or behavior between persons and/or organizations */
export interface ICommunicationABIEType {
    /**The unique identifier of the Uniform Resource Identifier (URI) for this communication such as an email address */
    get URIID(): UDT.IIdentiferType;
    /**The code specifying the channel or manner in which a communication can be made, such as telephone or email */
    get ChannelCode(): BasicTypes.IRequired<UDT.ICodeType>;
    /**The communication number, expressed as text and not including country access code or the area number code, for this communication */
    get LocalNumber(): UDT.ITextType;
    /**The text string of characters that make up the complete number for this communication */
    get CompleteNumber(): UDT.ITextType;
    /**The country access code for this communication number */
    get CountryNumberCode(): UDT.ICodeType;
    /**The extension number, expressed as text, assigned to this communication number to enable a caller to reach a specific party */
    get ExtensionNumber(): UDT.ITextType;
    /**The code specifying the area number typically used in communication.  This is also known in the US as the Area Code */
    get AreaNumberCode(): UDT.ICodeType;
    /**Access information, expressed as text, for the mode of communication. */
    get Access(): UDT.ITextType;
    /**The code specifying the use of this communication such as for business purposes or private. */
    get UseCode(): UDT.ICodeType;
    /**The text to identify a service provider */
    get ServiceProviderName(): UDT.ITextType;
    /**The indication of whether or not HTML format is preferred by the recipient for email communications. Usually sent in Communication components when ChannelCode is Telephone and the URIID has a mailto: email address. */
    get HTMLPreferredIndicator(): UDT.IIndicatorType;
    /**The preference for the usage of this communication method */
    get UsagePreference(): IPreferenceABIEType;
    /**This is used to indicate the various privacy types for this communication. If appearing within a Party component, then this option overrides the Privacy types specified at the Party component for this communication. */
    get Privacy(): Iterable<IPrivacyType>;
}

/**Precedence, advantage, or choice of one person or thing over another */
export interface IPreferenceABIEType {
    /**The number of the priority ranking of this preference */
    get PriorityRankingNumeric(): UDT.INumericType;
    /**The indication of whether or not this preference is the preferred option */
    get PreferredIndicator(): UDT.IIndicatorType;
    /**A period when a preference is not available */
    get UnavailablePeriod(): IPeriodABIEType;
    /**A period when a preference is available */
    get AvailablePeriod(): Iterable<IPeriodABIEType>;
}

/**Based on the UNCEFACT Occupation Core Component from the CCL 9b */
export interface IOccupationABIEType {
    /**The code specifying the type of the occupation */
    get TypeCode(): UDT.ICodeType;
    /**The occupation title */
    get Title(): Iterable<UDT.ITextType>;
    /**The textual description of the occupation */
    get Description(): Iterable<UDT.ITextType>;
    /**The code specifying the class of the occupation, such as accountancy banking, car delivery */
    get ClassCode(): UDT.ICodeType;
    /**The code specifying the relative importance (ranking) of this occupation with respect to the person's other occupations such as main occupation, secondary occupation. */
    get RankingCode(): UDT.ICodeType;
    /**The indication of whether or not the occupation is full-time */
    get FullTimeIndicator(): UDT.IIndicatorType;
    /**A period of time during which this occupation has been held */
    get PeriodHeld(): IPeriodABIEType;
}

/**Customer Trait */
export interface ITraitType {
    /**Descriptive text for the trait */
    get TraitText(): Iterable<UDT.ITextType>;
    /**Grouping code for the trait */
    get TraitGroupCode(): UDT.ICodeType;
    /**Code for the trait */
    get TraitTypeCode(): UDT.ICodeType;
}

/**A significant occurrence or happening related to an object process, or person */
export interface IEventType {
    /**A unique identifier for an event */
    get EventID(): UDT.IIdentiferType;
    /**Enumerated list of unusual event types */
    get EventTypeCode(): SQDT.IEventTypeCodeType;
    /**A textual description of the event */
    get EventDescription(): UDT.ITextType;
    /**A date, time, date time, or other value of an occurrence of this event.  This could be used to trakc such dates and times of creation, deletion, etc. */
    get EventOccurrenceDateTime(): UDT.IDateTimeType;
}

export interface IVehicleInventoryInvoiceType {
    /**Invoice number */
    get InvoiceNumberString(): QDT.IStringType;
    /**Invoice total */
    get InvoiceTotalAmount(): UDT.IAmountType;
    /**Shipment carrier-assigned load number */
    get LoadNumberString(): QDT.IStringType;
    /**Border Crossing indicator */
    get BorderCrossingIndicator(): UDT.IIndicatorType;
    /**Estimated time of arrival */
    get ETADate(): UDT.IDateType;
    /**Carrier Code */
    get CarrierID(): UDT.IIdentiferType;
    /**Warehouse Number */
    get WarehouseID(): UDT.IIdentiferType;
    /**Date order originally placed */
    get OrderDate(): UDT.IDateType;
    /**Detail information regarding a vehicle for a particular invoice */
    get VehicleInventoryVehicleLineItem(): Iterable<IVehicleInventoryVehicleLineItemType>;
    /**The Tax component represents information about a particular tax including information about the type of tax and the amount of the tax. */
    get Tax(): Iterable<ITaxType>;
    /**The number given to an order by a dealer */
    get DealerAssignedNumberString(): QDT.IStringType;
    /**The date the current status was recorded */
    get StatusDate(): UDT.IDateType;
    /**The date the OEM expects to build the vehicle */
    get TargetBuildDate(): UDT.IDateType;
    /**A code representing a reject reason */
    get RejectCode(): UDT.ICodeType;
    /**Information about option restrictions on the vehicle */
    get OptionRestrictionStatements(): UDT.ITextType;
    /**Representing hold status */
    get HoldCodeIndicator(): UDT.IIndicatorType;
    /**A code indicating who has action to take to address a reject */
    get RejectResponsibilityCode(): UDT.ICodeType;
    /**Indicator if a vehicle is being advertised online */
    get VehiclePromoteStatus(): UDT.IIndicatorType;
    /**Indicator if vehicle has been held by customer or by dealer */
    get VehicleHoldStatus(): UDT.ITextType;
}

export interface IVehicleInventoryVehicleLineItemType {
    /**Common vehicle component */
    get Vehicle(): IVehicleABIEType;
    /**Vehicle Branding Information */
    get BrandedInfo(): IBrandedInfoType;
    /**The date the item was sold */
    get OriginalSoldDate(): UDT.IDateType;
    /**Odometer reading of vehicle at time of delivery */
    get DeliveryDistanceMeasure(): SQDT.ILengthMeasureType;
    /**Door Key Number */
    get DoorKeyNumberString(): QDT.IStringType;
    /**Vehicle Ignition Key Number */
    get IgnitionKeyNumberString(): QDT.IStringType;
    /**Indicates whether the vehicle was produced for the United States or not. */
    get NonUSVehicleIndicator(): UDT.IIndicatorType;
    /**Status of odometer at trade-in */
    get OdometerStatus(): UDT.ITextType;
    /**The owner of a vehicle, boat, engine, truck, trailer, or other item. */
    get OwnerParty(): IPartyABIEType;
    /**Indication that vehicle has restrictions on its use */
    get RestrictionIndicator(): UDT.IIndicatorType;
    /**Description of vehicle use restrictions */
    get RestrictionDescription(): UDT.ITextType;
    /** The party receiving the goods or services.*/
    get ShipToParty(): IPartyABIEType;
    /**The party to which good or services were sold. */
    get SoldToParty(): IPartyABIEType;
    /**Indication whether Telematics Service Subscription is turned on */
    get TelematicsServiceIndicator(): UDT.IIndicatorType;
    /**Date vehicle was allocated and/or a delivery work order was cut */
    get VehicleAllocatedDate(): UDT.IDateType
    /**Indicates whether vehicle was ever a demo */
    get VehicleDemoIndicator(): UDT.IIndicatorType;
    /**Vehicle Order Number */
    get VehicleOrderNumber(): UDT.ITextType;
    /**Date shipped from warehouse or distribution center */
    get VehicleShipDate(): UDT.IDateType;
    /**Dealer assigned vehicle stock number */
    get VehicleStockString(): QDT.IStringType;
    /**Provides pricing information */
    get Pricing(): Iterable<IPricingABIEType>;
    /**Dealer incentive */
    get Incentive(): Iterable<IIncentiveABIEType>;
    /**The Tax component represents information about a particular tax including information about the type of tax and the amount of the tax. */
    get Tax(): Iterable<ITaxType>;
    get FleetAccount(): IFleetAccountType;
    /**State License plate number of vehicle */
    get LicenseNumberString(): QDT.IStringType;
    /**Vehicle status code */
    get VehicleStatusCode(): UDT.ICodeType;
    /**The option represents information about a vehicle's options */
    get Option(): Iterable<IOptionABIEType>;
    /**An indicator of vehicle's logistics information as it relates to its progress through the distribution pipeline.  This differs from VehicleStatusCode as it provides status on logistics activity, not a status category code */
    get VehicleActivityStatus(): UDT.ITextType;
    /**Communicates the method of acquisition of the used vehicle */
    get AcquisitionMethod(): UDT.ICodeType;
    /**Date the vehicle was acquired */
    get ItemAcquisitionDate(): UDT.IDateType;
    /**The location where the vehicle is physically stored.  Can be used to track the lot where the vehicle is stored at */
    get LocationID(): UDT.IIdentiferType;
    /**Date of the Vehicle Status change.  It should be used with the VehicleStatusCode elemennt above */
    get VehicleStatusDate(): UDT.IDateType;
    /**Service Campaign associated with sublet */
    get VehicleInventoryServiceCampaign(): Iterable<IServiceCampaignType>;
    /**Provides indicator information on Critical Recalls, based on which decisions can be made */
    get CriticalRecallIndicator(): UDT.IIndicatorType;
    /**The ImageAttachmentExtended component contains information about an image being attached to a BOD, e.g., image size, image type, image file name, etc. */
    get ImageAttachmentExtended(): Iterable<IImageAttachmentExtendedType>;
    /**Date that the vehicle was added to the dealer's inventory  */
    get DealerInventoryDate(): UDT.IDateType;
    /**Number of days that the vehicle has been in the dealer's inventory */
    get DaysInInventory(): UDT.INumericType;
    /**Date vehicle was placed into service */
    get InServiceDate(): UDT.IDateType;
    /**Odometer reading of vehicle when it was placed into service */
    get InServiceOdometer(): SQDT.ILengthMeasureType;
}

export interface IVehicleABIEType {
    /**Manufacturer-assigned model code of vehicle - Usually available in the VIN numbe r(use NCIC code) */
    get Model(): UDT.ITextType;
    /**Vehicle designated model year */
    get ModelYear(): QDT.IYearDateType;
    /**Descriptive vehicle model name */
    get ModelDescription(): Iterable<UDT.ITextType>;
    /**Vehicle make code - usually available in the VIN number (use NCIC code) */
    get MakeString(): QDT.IStringType;
    /**Class of sale */
    get SaleClassCode(): SCL.ISaleClassEnumeratedType;
    /**Condition of vehicle */
    get Condition(): UDT.ITextType;
    /**Any vehicle related notes */
    get VehicleNote(): Iterable<UDT.ITextType>;
    /**Manufacturer assigned trim code */
    get TrimCode(): UDT.ICodeType;
    /**Number of doors on vehicle */
    get DoorsQuantityNumeric(): UDT.INumericType;
    /**Manufacturer-assigned vehicle body style */
    get BodyStyle(): UDT.ITextType;
    /**Vehicle Transmission type*/
    get TransmissionGroup(): ITransmissionGroupType;
    get ColorGroup(): Iterable<IColorGroupType>;
    /**Vehicle class */
    get VehicleClassCode(): SCL.IVehicleClassEnumeratedType;
    /**Type of vehicle fuel */
    get FuelTypeCode(): SQDT.IFuelTypeCodeType;
    /**Indicates whether the vehicle is 2 or 4 wheel drive */
    get DriveTrain(): UDT.ITextType;
    /**Designates Vehicle drive type */
    get DriveTypeCode(): SCL.IDriveTypeEnumeratedType;
    /**Passneger/seat capacity count of vehicle */
    get VehiclePassengersNumeric(): UDT.INumericType;
    /**Describes the engine on the vehicle */
    get Engine(): Iterable<IEngineType>;
    /** The Vehicle identification. This could be the VIN, HIN, or some other unique identifier for a vehicle. 
     * This optional element allows only one vehicle ID for a given Vehicle. However, for some type of vehicles (e.g. construction equipment)
     * , the need arises to record more than one VehicleID for a Vehicle. 
     * If more than one vehicle ID must be recorded, please use the "VehicleIdentificationGroup" element below.  */
    get VehicleID(): UDT.IIdentiferType;
    /**The code on the axle of the vehicle */
    get AxleCode(): UDT.ICodeType;
    /**Manufacturer name */
    get ManufacturerName(): UDT.INameType;
    /**Vehicle weight */
    get VehicleWeightMeasure(): SQDT.IWeightMeasureType;
    /**Gross weight */
    get GrossWeightMeasure(): SQDT.IWeightMeasureType;
    /**The weight of the item without any load.  If the item has a trailer, this would be the weight of the item minus it */
    get UnloadedVehicleWeightMeasure(): SQDT.IWeightMeasureType;
    /**Grouping of similar models for order management purposes */
    get ModelGroup(): UDT.ITextType;
    /**Model Year can change indicator */
    get ModelYearChangeIndicator(): UDT.IIndicatorType;
    /**Alternate model code, usually used for vehicle ordering */
    get DistributorModelCode(): UDT.ITextType;
    /**Indicates the specific class of vehicle attached to the model description */
    get ModelClass(): UDT.ITextType;
    /**A government issued registration identifier for a vehicle */
    get RegistrationID(): UDT.IIdentiferType;
    /**Length of the vehicle */
    get VehicleLengthMeasure(): SQDT.ILengthMeasureType;
    /**A general term that refers to all of the mechanical parts of a car attached to a structural frame. In cars with unitized construction, the chassis comprises everything but the body of the car. */
    get Chassis(): IChassisType;
    /**The model series code for the specified vehicle.  This is different from make and model */
    get SeriesCode(): UDT.ICodeType;
    /**The name corresponding to the SeriesCode.  This is different from Make and Model */
    get SeriesName(): UDT.ICodeType;
    /**Dealer assigned vehicle stock number */
    get VehicleStockString(): QDT.IStringType;
    /**A detailed description for the vehicle */
    get VehicleDescription(): Iterable<UDT.ITextType>;
    /**Indicates the weight of the item when all fluids are empty */
    get DryWeightMeasure(): SQDT.IWeightMeasureType;
    /**Indicates the weight of the item when all fluids are added */
    get WetWeightMeasure(): SQDT.IWeightMeasureType;
    /**A large, often metallic container for holding or storing liquids or gases.*/
    get Tank(): Iterable<ITankType>;
    /**The maximum speed at which a particular vehicle configuration may obtain.  This includes the entinre configuration of the vehicle */
    get MaximumSpeedMeasure(): SQDT.ISpeedMeasureType;
    /**The height, length, and width of a vehicle */
    get VehicleDimension(): IDimensionType;
    /**The horizontal distance between the center of the front wheel, and the center of the rear wheel */
    get WheelBaseMeasure(): SQDT.ILengthMeasureType;
    /**Size of the smallest circular turn that the vehicle is capable of making */
    get TurningRadiusMeasure(): SQDT.ILengthMeasureType;
    /**Amount of space between the base of a vehicle tire and the underside of the chassis */
    get GroundClearanceMeasure(): SQDT.ILengthMeasureType;
    /**The distance from the ground to the top of the seat.  Used primarily with ATVs */
    get SeatHeightMeasure(): SQDT.ILengthMeasureType;
    /**A measurement describing the upper limit to the weight of a trailer a vehicle can tow */
    get TowingCapacityWeightMeasure(): SQDT.IWeightMeasureType;
    get CertificationGroup(): ICertificationGroupType;
    /**A measurement for describing the payload capacity of the vehicle */
    get PayloadCapacityWeightMeasure(): SQDT.IWeightMeasureType;
    /**Description of the interior condition of a preowned vehicle */
    get InteriorDescription(): UDT.ITextType;
    /**The vehicle's fron axle weight */
    get FrontAxleWeight(): SQDT.IWeightMeasureType;
    /**The vehicle's rear axle weight */
    get RearAxleWeight(): SQDT.IWeightMeasureType;
    /**The grouping of Vehicle Identifications. Use this component(group) instead of the simple VehicleID element, if more than one VehicleID must be recorded for a given vehicle (e.g. construction equipment). */
    get VehicleIdentificationGroup(): IVehicleIdentificationGroupType;
    /**A code identifying a particular market-specific configuration */
    get MarketConfigurationCode(): UDT.ITextType;
    /**Country where the vehicle has been exported to */
    get CountryExportedTo(): SQDT.ICountryCodeType;
    /**Indicates industry/area where the vehicle operates */
    get VehicleOperation(): UDT.ITextType;
    /**Indicates type of operations the vehicle is used in */
    get VehicleApplication(): UDT.ITextType;
    /**Component to communicate important dates and events for a vehicle. */
    get VehicleHistoryDateGroup(): Iterable<IVehicleHistoryDateGroupType>;
    /**Code to indicate the product option and variations within a function or property */
    get VariantID(): Iterable<UDT.IIdentiferType>;
    /**Description of the product option and variations within a function or property */
    get VariantDescription(): Iterable<UDT.ITextType>;
    /**Used to alter the basic specification of a standard vehicle. This is done by adding and deleting parts as required and possibly reconfiguring the truck to suit a customer’s specific requirements. */
    get CustomerAdaptations(): Iterable<UDT.IIdentiferType>;
    /**Also called S-Note, used to alter the basic specification of a standard vehicle. This is done by adding and deleting parts as required and possibly reconfiguring the truck to suit a customer’s specific requirements. */
    get CustomerAdaptationsDescriptions(): Iterable<UDT.ITextType>;
    /**Status code to indicate the reason why the vehicle became inactive; used to filter out campaigns */
    get InactiveCode(): UDT.ITextType;
    /**Used to identify if the vehicle is in project mode or in serial production */
    get Project(): UDT.ITextType;
    /**Used to identify if a vehicle is development or design vehicle */
    get Development(): UDT.ITextType;
    /**State or Province where vehicle isregistered */
    get RegistrationStateProvince(): UDT.ITextType;
    /**Country where vehicle is registered */
    get RegistrationCountry(): SQDT.ICountryCodeType;
    /**The Option represents information about a vehicle's options. */
    get Option(): Iterable<IOptionABIEType>;
    /**The vehicle's major assemblies */
    get VehicleMajorPartsProductItem(): Iterable<IPartsProductItemType>;
    /**Used to communicate product class code */
    get ProductClassCode(): UDT.ICodeType;
    /**Used to communicate product class code description */
    get ProductClassCodeDescription(): UDT.ITextType;
    /**To communicate telematics status and subscription information */
    get TelematicsSubscription(): Iterable<ITelematicsSubscriptionType>;
}

/**The detail information regarding a boat that is owned by an indivual or organization. */
export interface ITransmissionGroupType {
    /**Transmission Serial Number */
    get TransmissionCode(): UDT.ICodeType;
    /**Vehicle Transmission Type */
    get TransmissionTypeCode(): SCL.ITransmissionTypeEnumeratedType;
    /**Name of transmission type */
    get TransmissionTypeName(): UDT.ITextType;
}

/**The colorGroup component provides color information about a specific item */
export interface IColorGroupType {
    /**Identifies the item for which color is being described */
    get ColorItemCode(): BasicTypes.IRequired<SCL.IColorItemEnumeratedType>;
    /**Manufacturer-assigned color code */
    get ManufacturerColorCode(): UDT.ICodeType;
    /**Description of a color */
    get ColorDescription(): Iterable<UDT.ITextType>;
    /**The name of a color */
    get ColorName(): UDT.INameType;
    /**Indicates whether or not the color code can be changed */
    get ColorCodeChangeIndicator(): UDT.IIndicatorType;
}

/**The Engine component provides detail information about an engine */
export interface IEngineType {
    /**Deprecated: Use VehicleMake */
    get MakeString(): BasicTypes.IDeprecated<QDT.IStringType>;
    /**Descriptive vehicle model name */
    get ModelDescription(): Iterable<UDT.ITextType>;
    /**Vehicle designated model year */
    get Modelyear(): QDT.IYearDateType;
    /**Class of sale */
    get SelectClassCode(): SCL.ISaleClassEnumeratedType;
    /**Condition of vehicle */
    get Condition(): UDT.ITextType;
    /**Manufacturer-assigned model code of vehicle - Usually available in the VIN number (use NCIC code) */
    get Model(): UDT.ITextType;
    /**Dealer asigned vehicle stock number */
    get VehicleStockString(): QDT.IStringType;
    get ColorGroup(): Iterable<IColorGroupType>;
    /**Type of engine on or for a boat */
    get BoatEngineTypeCode(): SCL.IBoatEngineTypeEnumeratedType;
    /**Type of vehicle fueld */
    get FuelTypeCode(): SQDT.IFuelTypeCodeType;
    /**Measured in RPM is the prop speed at full throttle */
    get FullThrottleOperatingRangeMaximumMeasure(): SQDT.ISpeedMeasureType;
    /**Measured in RPM is the prop speed at minimum throttle */
    get IdleRevolutionPerMinuteForwardGearMinimumMeasure(): SQDT.ISpeedMeasureType;
    /**The amount of current in amps that the alternator can supply */
    get AlternatorOutputMeasure(): SQDT.IElectricityMeasureType;
    /**Battery size required to start the engine in CCA (Cold Cranking Amps) */
    get BatterySizeRequirementsMeasure(): SQDT.IElectricityMeasureType;
    /**Current required to run the electric motor */
    get CurrentDrawMeasure(): SQDT.IElectricityMeasureType;
    /**Maximum thrust produced by the electric motor */
    get PeakThrustMeasure(): SQDT.IForceMeasureType;
    /**The size of the engine piston/cylinder */
    get BoreMeasure(): SQDT.ILengthMeasureType;
    /**Piston movement distance */
    get StrokeMeasure(): SQDT.ILengthMeasureType;
    /**Indicates the way the engine cylinder is configured */
    get CylinderConfigurationCode(): SCL.ICylinderConfigurationEnumeratedType;
    /**Represents the number of cylinders in the vehicle engine */
    get NumberOfEngineCylindersNumeric(): UDT.INumericType;
    /**The type of system used to get the fuel into the engine cylinders */
    get FuleInductionSystemCode(): UDT.ICodeType;
    /**Defines the location on the boat that the engine can be mounted */
    get BoatEngineLocationCode(): SQDT.IBoatEngineLocationCodeType;
    /**Amount of fuel consumed by the engine- */
    get FuelConsumptionMeasure(): SQDT.IFuelConsumptionMeasureType;
    /**Total hours of engine(s) use */
    get TotalEngineHoursNumeric(): UDT.INumericType;
    /**Indicates if the engine has a Power Trim */
    get PowerTrimIndicator(): UDT.IIndicatorType;
    /**The method required to start the engine */
    get StartingSystemTypeCode(): SCL.IStartingSystemTypeEnumeratedType;
    /**System used to fire the engine */
    get IgnitionSystem(): UDT.ITextType;
    /**System used to lubricate the engine */
    get LubricationSystem(): UDT.ITextType;
    /**System used to cool the engine */
    get CoolingSystem(): UDT.ITextType;
    /**How much pollution the engine is rated to put out */
    get Emissions(): UDT.ITextType;
    /**System required to steer the engine */
    get SteeringSystem(): UDT.ITextType;
    /**Indicates the type of propeller */
    get PropellerType(): UDT.ITextType;
    /**General descriptive text used to describe the engine */
    get GeneralEngineDescription(): Iterable<UDT.ITextType>;
    /**Detailed descriptive text used to describe the engine.  This fiel dprovides more detail than the GeneralEngineDescription field */
    get DetailedEngineDescription(): Iterable<UDT.ITextType>;
    /**Text description of the transmission */
    get DriveTransmissionDescription(): Iterable<UDT.ITextType>;
    /**Engine serial number */
    get EngineSerialString(): QDT.IStringType;
    /**Drive serial number */
    get DriveSerialString(): QDT.IStringType;
    /**The serial number of the Transom Shield Kit (TSK) */
    get TransomShieldKitSerialString(): QDT.IStringType;
    /**V-Drive serial number */
    get VDriveSerialString(): QDT.IStringType;
    /**The serial number of the transmission */
    get TransmissionSerialString(): QDT.IStringType;
    /**Indicates the weight of the item when all fluids are empty */
    get DryWeightMeasure(): SQDT.IWeightMeasureType;
    /**Indicates the weight of the item when all fluids are present */
    get WetWeightMeasure(): SQDT.IWeightMeasureType;
    /**Length of the shaft on which the prop mounts */
    get ShaftLengthMeasure(): SQDT.ILengthMeasureType;
    /**The mean effective pressure (MEP) is the average pressure exerted on the piston during each power stroke */
    get EffectiveMeanPressureMeasure(): Iterable<IMeasurementType>;
    /**Defines the manufacturers rated output drive power of the engine. */
    get PowerMeasure(): Iterable<IMeasurementType>;
    /**Mean piston speed is the average speed of the piston in a reciprocating engine. */
    get MeanPistonSpeedMeasure(): Iterable<IMeasurementType>;
    /**Pressure in the cylinder when the engine is running at 240-300 rpm */
    get CompressionPressureMeasure(): SQDT.IPressureMeasureType;
    /**Define the manufacturers rated torque output of the engine */
    get TorqueMeasure(): IMeasurementType;
    get GearRatioGroup(): Iterable<IGearRatioGroupType>;
    get EngineDimensions(): Iterable<IEngineDimensionsType>;
    /**Volume displaced by each piston moving from bottom dead center to top dead center.  This is for all pistons in total */
    get DisplacementMeasure(): SQDT.IDisplacementMeasureType;
    /**Voltage required to run an electric motor */
    get OperatingVoltageMeasure(): SQDT.IElectricityMeasureType;
    /**A value that represents the ratio of the volume of its combustion chamber, from its largest capacity to its smallest capacity */
    get CompressionRatioMeasure(): UDT.IMeasureType;
    /**Engines need to be identified with part identifier */
    get ItemID(): UDT.IIdentiferType;
    /**Engine manufacturer name */
    get ManufacturerName(): UDT.ITextType;
}

/**The Measurement components provides details about specific measurements of an item. */
export interface IMeasurementType {
    /**Defines an amount of pressure */
    get PressureMeasure(): SQDT.IPressureMeasureType;
    /**Defines a rate of speed */
    get SpeedMeasure(): SQDT.ISpeedMeasureType;
    /**Defines a rate of electricity */
    get ElectricityMeasure(): SQDT.IElectricityMeasureType;
    /**The amount of mechanical energy produced. This can be the number of horse power that is produced by an engine.*/
    get MechanicalEnergyMeasure(): SQDT.IPowerMeasureType;
    /**Code identifying a physical location */
    get LocationID(): UDT.IIdentiferType;
    /**A name to identify the location */
    get LocationName(): Iterable<UDT.ITextType>;
}

/**The GearRatio component provides information an engine's gears. */
export interface IGearRatioGroupType {
    /**The ratio of the engine rotation to the output drive rotation */
    get GearRatio(): UDT.ITextType;
    /**A description of the gear */
    get GearRatioDescription(): Iterable<UDT.ITextType>;
}

/**Physical size of the engine, this is usually consists of two nodes, one for length and one for width */
export interface IEngineDimensionsType {
    /**A description of the dimensions being described for an engine */
    get EngineDimensionDescription(): Iterable<UDT.ITextType>;
    /**Indicates the height of the engine */
    get EngineHeightMeasure(): SQDT.ILengthMeasureType;
    /**Indicates the width of the engine */
    get EngineWidthMeasure(): SQDT.ILengthMeasureType;
    /**Indicates the depth of the engine */
    get EngineDepthMeasure(): SQDT.ILengthMeasureType;
}

/**A general term that refers to all of the mechanical parts of a car attached to a structural frame. In cars with unitized construction, the chassis comprises everything but the body of the car. */
export interface IChassisType {
    /**Make of chassis */
    get ChassisMake(): BasicTypes.IRequired<UDT.ITextType>;
    /**Model of chassis */
    get ChassisModel(): UDT.ITextType;
    /**Unique identifier for the chassic */
    get ChassisSerialString(): UDT.IIdentiferType;
}

/**A large, often metallic container for holding or storing liquids or gases. */
export interface ITankType {
    /**The purpose or usage of this tank */
    get TankUsageCode(): BasicTypes.IRequired<SQDT.ITankUsageCodeType>;
    /**The type of Material the Tank is constructed from */
    get TankMaterialCode(): SQDT.ITankMaterialCodeType;
    /**How much the tank can hold */
    get TankCapacityMeasure(): SQDT.IVolumeMeasureType;
    /**The number of tanks */
    get TankCountNumeric(): UDT.INumericType;
    /**Precedence, advantage or choice of one person or thing over another */
    get UsagePreference(): IPreferenceABIEType;
    /**Unique identifier for the tank */
    get TankSerialString(): UDT.IIdentiferType;
}

/**The Dimensions component represents the dimensions of an item, area, etc. using various measurements including width, height, length, and diameter */
export interface IDimensionType {
    /**The value of the dimension that has been measured */
    get DimensionValueMeasure(): SQDT.ILengthMeasureType;
    /**A code representing the type of dimension measure provided */
    get DimensionTypeCode(): UDT.ICodeType;
    /**A free-form text description of the dimension provided */
    get DimensionDescription(): UDT.ITextType;
    /**The measurement of the extent of something from side to side */
    get WidthMeasure(): SQDT.ILengthMeasureType;
    /**The longest extent of anything as measured from end to end */
    get LengthMeasure(): SQDT.ILengthMeasureType;
    /**The distance upward from a given level to a fixed point */
    get HeightMeasure(): SQDT.ILengthMeasureType;
    /**The width of a circulr or cylindrical object */
    get DiameterMeasure(): SQDT.ILengthMeasureType;
}

/**Component provides information about certifications issued for a specific item */
export interface ICertificationGroupType {
    /**Name of issuer of certification */
    get CertificationIssuerName(): UDT.INameType;
    /**Certification Value */
    get CertificationValue(): UDT.ITextType;
    /**Date when the car completed the certification testing */
    get CertificationDate(): UDT.IDateType;
    /**Warranty applicable for the certified vehicle */
    get CertifiedWarrantyCode(): UDT.ITextType;
    /**Odometer reading when the vehicle was certified */
    get ActualOdometer(): SQDT.ILengthMeasureType;
    /**A code indicating how the vehicle was previously used */
    get VehiclePreviousUseCode(): SCL.IVehicleUseContentType;
    /**Individual or company that owned the vehicle previously */
    get PreviousOwnerParty(): IPartyABIEType;
    get ClassAndWarranty(): Iterable<UDT.ITextType>;
    get RepairOrderNumber(): Iterable<QDT.IStringType>;
}

/**The grouping of Vehicles that a Labor Operation ID corresponds.  
 * Additionally, use this ocmponent instead of the simple VehicleID element, if more than one VehicleID must be recorded for a given vehicle */
export interface IVehicleIdentificationGroupType {
    /**The unique id for a grouping of vehicles */
    get VehicleGroupID(): Iterable<UDT.IIdentiferType>;
    /**The vehicle identification.  This could be the VIN, HIN, or some unique identifier for a vehicle */
    get VehicleID(): Iterable<UDT.IIdentiferType>;
}

/**Component to communicate important dates and events for a vehicle */
export interface IVehicleHistoryDateGroupType {
    /**Date when an important event took place for a vehicle */
    get VehicleHistoryDate(): BasicTypes.IRequired<UDT.IDateType>;
    /**Type code of the event that ook place on the Vehicle History Date */
    get VehicleHistoryTypeCode(): UDT.ICodeType;
    /**Description of the event that took place on VehicleHistoryDate */
    get VehicleHistoryTypeDescription(): UDT.ITextType;
}

/**Describes the various options and pricing for a particular item */
export interface IOptionABIEType {
    /**A unique identifier for a vehicle, boat, or other item's option */
    get OptionID(): UDT.IIdentiferType;
    /**The type supplied by an external code list that specifies a particular option.  
     * Source of the code list should be specified in the appropriate attributes for this field, and the option type specified in this field.  
     * This may be different than the OptionID which is a unique identifier for an option */
    get OptionTypeCode(): UDT.ICodeType;
    /**Abbreviated description of the option */
    get OptionShortDescription(): Iterable<UDT.ITextType>;
    /**Name of vehicle options */
    get OptionName(): UDT.ITextType;
    /**Stock Number of vehicle options */
    get OptionStockNumberString(): QDT.IStringType;
    /**Item manufacturer name */
    get ManufacturerName(): UDT.INameType;
    /**Free form text related to option */
    get OptionNotes(): Iterable<UDT.ITextType>;
    /**Option pricing */
    get OptionPricing(): Iterable<IPricingABIEType>;
    /**Indicates if the option has been activated */
    get OptionActiveIndicator(): UDT.IIndicatorType;
    /**A defined person or department that acts as a point of contact with another peson or department. */
    get DefinedContact(): IContactABIEType;
    /**Residual value of option */
    get OptionResidualValueAmount(): UDT.IAmountType;
}

export interface IPricingABIEType {
    /**Indicates the source */
    get PriceSourceCode(): Iterable<UDT.ICodeType>;
    /**Used to express delta between two multiple price types */
    get PricingDeltaPercent(): UDT.IPercentType;
    /**This field indicates whether or not this price should be displayed */
    get PriceHideIndicator(): UDT.IIndicatorType;
    /**A sum of money for which something is orm ay be bought or sold */
    get Price(): Iterable<IPriceABIEType>;
    /**It represents the date a price became effective */
    get PriceEffectiveDate(): UDT.IDateType;
}

/**A sum of money for which something is or may be bought or sold */
export interface IPriceABIEType {
    /**A code specifying the type of price */
    get PriceCode(): SCL.IPriceEnumeratedType;
    /**The monetary value of the price charged */
    get ChargeAmount(): UDT.IAmountType;
    /**A textual description of price */
    get PriceDescription(): Iterable<UDT.ITextType>;
    /**A location where a particular set of information applies. i.e. if found in the price component this specifies the location within a country that the price may apply. */
    get ApplicableLocation(): Iterable<ILocationABIEType>;
    /**Tax type relating to the price */
    get TaxType(): UDT.ITextType;
    /**A specific period of time such as the length of time between two known date/time points, from a start date onwards, or up to an end date of when something is effective. */
    get EffectivePeriod(): IPeriodABIEType;
}

/**A physical location or place */
export interface ILocationABIEType {
    /**Code identifying a physical location */
    get LocationID(): UDT.IIdentiferType;
    /**A name to identify the location */
    get LocationName(): Iterable<UDT.ITextType>;
    /**A free-form text description of a physical location */
    get LocationDescription(): Iterable<UDT.ITextType>;
    /**An identifier for the District an organization resides */
    get DistrictID(): UDT.IIdentiferType;
    /**Type of location */
    get LocationTypeCode(): SQDT.ILocationTypeCodeType;
    /**A name, expressed as text, of the country */
    get CountryName(): Iterable<UDT.ITextType>;
    /**A unique country identifier */
    get CountryID(): SQDT.ICountryCodeType;
    /**A name, expressed as text, of the sub-division of a country */
    get CountrySubDivisionName(): Iterable<UDT.ITextType>;
}

/**The business information common to all product items */
export interface IPartsProductItemType {
    /**Deprecated: Use ItemIdentificationGroup */
    get ItemID(): BasicTypes.IDeprecated<UDT.IIdentiferType>;
    /**The name of a Part or Product Item as text */
    get PartName(): Iterable<UDT.ITextType>;
    /**The description of a Part or Proudct Item as text */
    get PartItemDescription(): Iterable<UDT.ITextType>;
    /**Specifies whether the parts are indicated by manufacturer part code or part number */
    get PartTypeCode(): SCL.IPartTypeEnumeratedType;
    /**Gifts, literature, keys, regular parts Inventory Class code used in DMS system */
    get PartClassCode(): UDT.ICodeType;
    /**Identifies the part manufacturer */
    get PartManufacturer(): UDT.ITextType;
    /**Identifies class of part */
    get ClassCode(): UDT.ICodeType;
    /**Indicates that governmental regulations consider this part as hazardous material */
    get HazmatIndicator(): UDT.IIndicatorType;
    /**Gives information about type of hazardous material.  This information is used for transportation and storage restriction */
    get HazardousMaterialDescription(): UDT.ITextType;
    /**The category a part number is associated with */
    get ItemIDCategoryTypeCode(): SQDT.IItemIDCategoryTypeCodeType;
    /**Deprecate: Use ItemIdentificationGroup */
    get AlternateItemIDs(): BasicTypes.IDeprecated<Iterable<IAlternateItemIDsType>>;
    /**A group of identifications that uniquely identifies this document */
    get ItemIdentificationGroup(): IItemIdentificationGroupType;
    /**A number, usually one of a series, assigned for identification.  This is not the Item ID */
    get SerialNumberID(): UDT.IIdentiferType;
    /**Indicates whether or not a serial number is required for a particular item. */
    get SerialNumberIDRequiredIndicator(): UDT.IIndicatorType;
    /**Allows ther etailer to know the quantity contained in the package */
    get PackageQuantity(): SQDT.IQuantityType;
    /**Method of purchase normally used to acquire this item */
    get AcquisitionMethodTypeCode(): SQDT.IAcquisitionMethodTypeCodeType;
    /**Used by DMS providers for internal cross referencing between multiple vendor lines */
    get VendorCode(): UDT.ICodeType;
    /**Code issued by item manufacturer that indicates the rules and pricing used when selling direct to retailers instead of through OEMs */
    get ProgramCode(): UDT.ICodeType;
    /**The condition of a part */
    get PartConditionCode(): SQDT.IPartConditionCodeType;
    /**Units of measure */
    get UOMCode(): SCL.IUOMEnumeratedType;
    /**Vehicle Maintenance Reporting Standards code */
    get VMRSCode(): UDT.ICodeType;
    /**Indicates level of stocking maintained by OEM for this part.  This pertains not only to the replentishment algorith, but the number of stocking locations */
    get StockingLevelIndicatorTypeCode(): SQDT.IStockingLevelIndicatorCodeType;
    /**This component allows for the free form entry of notes and text descriptions. Detailed data should use one of the existing fields or submit a modification request back to STAR to capture the appropriate data. */
    get FreeFormTextGroup(): IFreeFormTextGroupType;
    /**An indicator to flag whether or not the part may be returned */
    get EligibleForReturnIndicator(): UDT.IIndicatorType;
    /**Communicates the current supply status of the part providing better visibility on the availability and lead time for procurement */
    get PartSupplyStatusCode(): UDT.ICodeType;
    /**Text Description of the Core Part */
    get CorePartDescription(): UDT.ITextType;
    /**Description of a remanufactured part */
    get RemanufacturedPartDescription(): UDT.ITextType;
    /**Patent pending description of a part */
    get PatentPendingDescription(): UDT.ITextType;
    /**Service file description */
    get ServiceFileDescription(): UDT.ITextType;
    /**Part sales restriction */
    get PartDealerSalesRestriction(): SCL.IPartSalesRestrictionCodeEnumeratedType;
    /**Ordering Restrictions */
    get PartOrderRestriction(): SCL.IPartOrderingRestrictionCodeEnumeratedType;
    /**Source code for the part */
    get PartSourceCode(): UDT.ICodeType;
    /**Description of the source code */
    get PartSourceDescription(): UDT.ITextType;
    /**The vehicle's major assemblies */
    get VehicleMajorPartsProductItem(): Iterable<IPartsProductItemType>;
    /**To be able to communicate prices on attachments */
    get VehicleMajorPartsProductItemPricing(): IPricingABIEType;
    /**Specific confiruation available for a limited time period */
    get VehicleMajorPartsProductItemConfiguration(): Iterable<IVehicleMajorPartsProductItemConfigurationType>;
}

/**Used to provide alternate IDs for an item such as OEM part number, ACDELCO part number, UPC, etc. */
export interface IAlternateItemIDsType {
    /**The identifier of an item */
    get ItemID(): BasicTypes.IRequired<UDT.IIdentiferType>;
    /**The category a part number is associated with */
    get ItemIDCategoryTypeCode(): SQDT.IItemIDCategoryTypeCodeType;
}

/**A list of identifications for an item. Multiple item identifications can be identified using the ItemIdentificationGroup e.g., Order's ItemID, Fulfiller's ItemID, 3rd Party Fulfiller ItemID, etc.*/
export interface IItemIdentificationGroupType {
    get ItemIdentification(): Iterable<IItemIdentificationType>;
}

/**An identifier for an item */
export interface IItemIdentificationType {
    /**The identifier of an item */
    get ItemID(): BasicTypes.IRequired<UDT.IIdentiferType>;
    /**The agency role that defined the Item. An example of an agency may be a manufacturer, a retail system provider, etc. This list does not contain specific entity names, only roles. Use of the schemaAgencyName should be used to identify the agency defining the Role. Roles are defined in the enumeration. */
    get AgencyRoleCode(): SQDT.IAgencyRoleCodeType;
}

/**Used for providing free form text notes and text Descriptions */
export interface IFreeFormTextGroupType {
    /**Free-form text field describing a note */
    get Note(): Iterable<UDT.ITextType>;
    get Description(): Iterable<UDT.ITextType>;
}

/**Specific configuration available for a limited time period */
export interface IVehicleMajorPartsProductItemConfigurationType {
    /**Configuration code */
    get Code(): UDT.ICodeType;
    /**Configuration code description */
    get Description(): UDT.ITextType;
    /**Time period this configuration is available */
    get EffectivePeriod(): IPeriodABIEType;
}

/**To communicate telematics status and subscription information */
export interface ITelematicsSubscriptionType {
    /**List of status of subscription */
    get StatusList(): Iterable<IStatusListType>;
    /**To commnicate the list of subscriptions. */
    get SubscriptionList(): Iterable<ISubscriptionListType>;
}

/**List of status of sbuscription */
export interface IStatusListType {
    /**Status type */
    get StatusType(): UDT.ITextType;
    /**Status Description */
    get StatusDescription(): UDT.ITextType;
}

/**To communicate the list of subscriptions */
export interface ISubscriptionListType {
    /**Subscription start date */
    get SubscriptionStartDate(): UDT.IDateType;
    /**Subscription End date */
    get SubscriptionEndDate(): UDT.IDateType;
    /**Subscription term and conditions */
    get SubscriptionTerms(): UDT.ITextType;
    /**Product Type */
    get ProductPackageType(): UDT.ITextType;
    /**Product Description */
    get ProductPackageDescription(): UDT.ITextType;
    /**Status of the subscription */
    get SubscriptionServiceStatus(): UDT.ITextType;
}

export interface IBrandedInfoType {
    /**This tag indicates if a vehicle's title has been branded */
    get BrandedTitleIndicator(): UDT.IIndicatorType;
    /**Branding Date */
    get BrandedTitleDate(): UDT.IDateType;
    /**Branding State Code */
    get BrandingStateCodeString(): QDT.IStringType;
    /**Branding State Reference Number */
    get BrandingStateReferenceString(): QDT.IStringType;
    /**Branding source */
    get BrandingSource(): UDT.ITextType;
    /**A title identification number */
    get TitleID(): UDT.IIdentiferType;
    /**A description of the branding */
    get BrandingDescription(): Iterable<UDT.ITextType>;
}

export interface ITaxType {
    /**Identifies the type tax */
    get TaxTypeCode(): SCL.ITaxTypeEnumeratedType;
    /**Free form text description of tax amount */
    get TaxDescription(): Iterable<UDT.ITextType>;
    /**Actual amount of tax paid */
    get TaxAmount(): UDT.IAmountType;
    /**Unit amount of sales tax */
    get UnitSalesTaxAmount(): UDT.IAmountType;
    /**Tax Percentage Rate */
    get TaxRatePercent(): UDT.IPercentType;
    /**Total taxable price */
    get TotalTaxableAmount(): UDT.IAmountType;
    /**Total non-taxable price */
    get NonTaxableAmount(): UDT.IAmountType;
    /**Tax type identification */
    get TaxTypeIdCode(): SCL.ITaxTypeIdEnumeratedType;
    /**Determines whether the dealer wants to claim tax on the cost */
    get TaxabilityIndicator(): UDT.IIndicatorType;
    /**Indicates whether the tax is capitalized, meaning whether it is included in the monthly payments.  If the tax is not capitablized it is to be paid up front */
    get CapitalizedTaxIndicator(): UDT.IIndicatorType;
    /**The name of the organization or jurisdiction the tax is paid to */
    get TaxPaidToName(): UDT.INameType;
    /**USed to indicate if the Tax has been paid or is not applicable */
    get TaxStatusCode(): SQDT.ITaxStatusCodeType;
    /**Tax exempt flag */
    get TaxExemptIndicator(): UDT.IIndicatorType;
    /**Tax Exempt ID number of the purchaser */
    get TaxExemptID(): UDT.ITextType;
}

/**Fleet account information associated with a vehicle */
export interface IFleetAccountType {
    /**Manufacturer defined fleet account number */
    get FleetAccountString(): QDT.IStringType;
    /**Uniquely identifies the vehicle as part of a fleet company */
    get FleetVehicleID(): UDT.IIdentiferType;
    /**Fleet Purchase order number vehicle was purchased under */
    get FleetPurchaseOrderNumberString(): QDT.IStringType;
    /**Vehicle available to Fleet Indicator */
    get FleetAvailableIndicator(): UDT.IIndicatorType;
    /**Indicates that this vehicle only available to flee */
    get FleetOnlyIndicator(): UDT.IIndicatorType;
    /**Identifies to which fleet this vehicle belongs.  This number is assigned based on state licensing and registration of the vehicle */
    get RegistrationFleetID(): UDT.IIdentiferType;
    /**Describes the contents of the FleetAccountString */
    get FleetAccountCode(): SQDT.IFleetAccountCodeType;
    /**This component keeps track of the number of vehicles, make, and vehicle class that are currently on the Fleet Account. */
    get FleetQuantity(): Iterable<IFleetQuantityType>;
}

/**This component keeps track of the number of vehicles, make, and vehicle class that are currently on the Fleet Account */
export interface IFleetQuantityType {
    /**This value represents the number of vehicles */
    get FleetCountNumeric(): BasicTypes.IRequired<UDT.INumericType>;
    /**Deprecated: Use VehicleMake*/
    get MakeString(): BasicTypes.IDeprecated<QDT.IStringType>;
    /**Class of vehicle */
    get VehicleClassCode(): SCL.IVehicleClassEnumeratedType;
}

export interface IServiceCampaignType {
    /**Manufacturer assigned campaign number */
    get CampaignNumberString(): QDT.IStringType;
    /**Manufacturer assigned Campaign Option Code */
    get CampaignOptionCode(): UDT.ICodeType;
    /**A campaign related field specifying the reimbursement code for a campaign service. Reimbursement codes denote the mix of part and labor operations the dealer used to perform the service. */
    get CampaignReimbursementCode(): UDT.ICodeType;
    /**Service Campaign Description */
    get CampaignDescription(): Iterable<UDT.ITextType>;
    /**A campaign related field specifying the disposition of a campaign */
    get CampaignDispositionCode(): UDT.ICodeType;
    /**Denotes whether claim is actual campaign service or additional service, but still related to the campaign */
    get SupplementalCampaignIndicator(): UDT.IIndicatorType;
    /**Free form comments related to campaign */
    get CampaignNotes(): UDT.ITextType;
    /**The type of campaign code */
    get CampaignTypeCode(): UDT.ICodeType;
    /**A date related to the Campaign Type Code */
    get CampaignDate(): UDT.IDateType;
    /**A campaign group code */
    get CampaignGroupCode(): UDT.ICodeType;
    /**A campaign sub group code */
    get CampaignSubGroupCode(): UDT.ICodeType;
    /**The date the campaign will expire */
    get CampaignExpirationDate(): UDT.IDateType;
    /**Description of the Campaign Type Code */
    get CampaignTypeDescription(): UDT.ITextType;
    /**The original campaign number of this recall */
    get OriginalCampaignNumber(): UDT.ITextType;
}

export interface IImageAttachmentExtendedType extends IImageAttachmentType {
    /**Image attachment title */
    get ImageAttachmentTitle(): UDT.ITextType;
    /**Holder for embedded data */
    get EmbeddedData(): Iterable<IEmbeddedDataType>;
    /**Size of an image file */
    get ImageFileSizeMeasure(): SQDT.IComputerStorageMeasureType;
    /**The date and time the image was last modified */
    get ImageLastModifiedDateTime(): UDT.IDateTimeType;
    /**Free-form text description of the image.  This field is used to provide a more detailed description than the ImageTitle */
    get ImageDescription(): Iterable<UDT.ITextType>;
    /**Indicates the perspective from which the photo was taken */
    get ImagePerspectiveCode(): SCL.IImagePerspectiveEnumeratedType;
    /**Indicate sthe usage preference */
    get UsagePreference(): IPreferenceABIEType;
    /**Used to provide additional information that helps describe the image.  Can be used to add additional notes about the image and information beyond a general description */
    get FreeFormTextGroup(): IFreeFormTextGroupType;
}

export interface IImageAttachmentType {
    /**A unique identifier for this image.  Can be used to help uniqely identify multiple images but of different sizes and types */
    get ID(): UDT.IIdentiferType;
    /**URI */
    get URI(): QDT.IURIType;
    /**Image tag width. */
    get ImageWidthMeasure(): SQDT.ILengthMeasureType;
    /**Image tag height */
    get ImageHeightMeasure(): SQDT.ILengthMeasureType;
    /**Image alternate text */
    get ImageAlternateText(): UDT.ITextType;
}

export interface IEmbeddedDataType {
    /**Container to carry the embedded data */
    get DataString(): QDT.IStringType;
}

export interface IIncentiveABIEType {
    /**Incentive element can have multiple occurrences. Unique incentive identifier */
    get IncentiveID(): BasicTypes.IRequired<UDT.IIdentiferType>;
    /**Type of incentive */
    get IncentiveSourceType(): BasicTypes.IRequired<UDT.ITextType>;
    /**Type of Dealer Incentive */
    get IncentiveType(): BasicTypes.IRequired<UDT.ITextType>;
    /**Dealer Incentive Name */
    get IncentiveName(): BasicTypes.IRequired<UDT.ITextType>;
    /**Dealer Incentive Description */
    get IncentiveDescription(): UDT.ITextType;
    /**Dealer Incentive Disclosure */
    get IncentiveDisclosure(): IIncentiveDisclosureABIEType;
    /**Flag indicating condition offer */
    get IncentiveConditionalFlag(): BasicTypes.IRequired<UDT.ITextType>;
    /** Dealer internal note */
    get IncentiveNote(): UDT.ITextType;
    /**Monetary incentive amount */
    get IncentiveAmount(): UDT.IAmountType;
    /**Finance incentive percentage */
    get IncentiveFinancePercentage(): UDT.IPercentType;
    /**Finance/Lease incentive term */
    get IncentiveTerm(): UDT.INumericType;
    /**Lease incentive downpayment */
    get IncentiveDownPayment(): UDT.IAmountType;
    /**Lease incentive number of miles per year */
    get IncentiveMiles(): UDT.INumericType;
    /**Incentive Incremental Reduction */
    get IncentiveIncrementalReduction(): Iterable<IIncentiveIncrementalReductionABIEType>;
    /**A specific period of time such as the length of time between two known date/time points, from a start date onwards, or up to an end date of when something is effective. */
    get IncentiveEffectivePeriod(): BasicTypes.IRequired<IIncentiveEffectivePeriodABIEType>;
    /**Incentive start date */
    get LastUpdated(): BasicTypes.IRequired<UDT.IDateTimeType>;
}

export interface IIncentiveDisclosureABIEType {
    /**Type of Dealer Incentive Disclosure */
    get DisclosureType(): UDT.ITextType;
    /**Dealer Incentive Disclosure Title */
    get DisclosureTitle(): UDT.ITextType;
    /**Dealer Incentive Disclosure */
    get DisclosureText(): UDT.ITextType;
}

export interface IIncentiveIncrementalReductionABIEType {
    /**Incentives incremental reductions time type */
    get ReductionTimeType(): UDT.ITextType;
    /**Incentives incremental reductions type */
    get ReductionType(): UDT.ITextType;
    /**Incentives incremental reductions amount */
    get ReductionAmount(): UDT.IAmountType;
    /**Incentives incremental reductions amount */
    get ReductionPercent(): UDT.IPercentType;
    /**Incentives reduction start date */
    get StartDate(): UDT.IDateType;
    /**Days on lot when incentives reduction starts */
    get DaysOnLot(): UDT.INumericType;
}

export interface IIncentiveEffectivePeriodABIEType {
    /**Incentive start date */
    get StartDate(): UDT.IDateType; //udt
    /**Incentive end date */
    get EndDate(): UDT.IDateType; //udt
}

export interface IChangeVehicleInventoryType extends IBusinessObjectDocumentType {
    get ChangeVehicleInventoryDataArea(): IChangeVehicleInventoryDataAreaType;
}

export interface IChangeVehicleInventoryDataAreaType {
    get Change(): IChangeType;
    get VehicleInventory(): Iterable<IVehicleInventoryType>;
}

export interface IChangeType extends IActionVerbType {
    get responseCode(): BasicTypes.IAttribute<OACL.IResponseActionCodeContentType>;
}

export interface IActionVerbType extends OAGIS.IVerbType {
    get ActionCriteria(): Iterable<OAGIS.IActionCriteriaType>
}