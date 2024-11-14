import {ILanguageEnumeratedType, 
    ICountryEnumeratedType, 
    IConfirmationEnumeratedType,
    ITransactionTypeCodeEnumeratedType,
    IMaritalStatusEnumeratedType,
    IGenderEnumeratedType,
    ISaleClassEnumeratedType,
    VehicleClassEnumeratedType,
    IDriveTypeEnumeratedType,
    ITransmissionTypeEnumeratedType,
    IColorItemEnumeratedType,
    IBoatEngineTypeEnumeratedType,
    ICylinderConfigurationEnumeratedType,
    IStartingSystemTypeEnumeratedType,
    IVehicleUseContentType,
    IPriceEnumeratedType,
    IPartTypeEnumeratedType,
    IUOMEnumeratedType,
    IPartSalesRestrictionCodeEnumeratedType,
    IPartOrderingRestrictionCodeEnumeratedType,
    TaxTypeEnumeratedType,
    ITaxTypeIdEnumeratedType,
    ImagePerspectiveEnumeratedType} from './scl';

export interface IRequired<T> {
}

export interface IDeprecated<T> {
}

export interface IAttribute<T> {
}

//#region Completed

export interface IShowVehicleInventoryType extends IBusinessObjectDocumentType {
    /**Show Vehicle Inventory */
    get ShowVehicleInventoryDataArea(): IShowVehicleInventoryDataAreaType;
}

/**Is the schema based inheritance for all BODs.  The logical model would also include the DataArea */
export interface IBusinessObjectDocumentType {
    /**Provides the information that an application may need to know in order to communicate in an integration of two or more business applications */
    get ApplicationArea(): IRequired<IApplicationAreaType>;
    /**STAR Release this BOD instances belongs.  This should contain the STAR repository version in the following recommended format. 5.1.4_M20080328 */
    get releaseID(): IRequired<IAttribute<IString>>;
    /**Indicates whether this BOD is being sent in a Test or a Production mode.  Default=Production */
    get systemEnvironmentCode(): IAttribute<ISystemEnvironmentCodeContentType>; //oacl
    /**Indicates the language that the contents of the BOD is in unless otherwise stated.  Default=en-US */
    get languageCode(): IAttribute<ILanguageEnumeratedType>;//scl
}

export interface IApplicationAreaType {
    /**This identifies characteristics and control identifiers that relate to the application that created the BOD */
    get Sender(): IRequired<ISenderType>;
    /**This is used as the creation moment of this BOD */
    get CreationDateTime(): IRequired<IDateTimeType>;
    /**If the BOD is to be signed the signature element is included, otherwise it is not */
    get Signature(): ISignature;
    /**The BODId provides a place to carry a GUID that will make each BOD instance uniquely identifiable */
    get BODID(): IIdentifierType;
    /**This identifies characteristics and control identifers that relate to the application that receives the BOD */
    get Destination(): IRequired<IDestinationType>;
}

/**This identifies characteristics and control identifiers that relate to the application that created the Business Object Document. */
export interface ISenderType extends ISenderBaseType {
    /**DCS Software Creator Code */
    get CreatorNameCode(): IRequired<ITextType>;
    /**Additional information about hte sending platform */
    get SenderNameCode(): IRequired<ICodeType>;
    /**Phsyical address of the sender */
    get URI(): IURIType;
    /**Dealer Code of source of information */
    get DealerNumberID(): IIdentifierType;
    /**Dealer code store number */
    get StoreNumber(): ITextType;
    /**Dealer code area number */
    get AreaNumber(): ITextType;
    /**Source Dealer country location */
    get DealerCountryCode(): ICountryEnumeratedType;
    /**This code is used to define the language of the data used in this transaction */
    get LanguageCode(): ILanguageCodeType;
    /**Indicates if the user requests to receive pending mail that has been stored and has yet not been delivered. */
    get DeliverPendingMailIndicator(): IIndicatorType;
    /**Token for application specific authentication.  used to authenticate dealership/users through application specific security */
    get Password(): ITextType;
    /**The sender's software version number */
    get SystemVersion(): IStringType;
    /**The Party Id field uniquely identifies the Sender of this message.  This element can be used for parties within the Automotive Community as well as external parties */
    get PartyID(): IIdentifierType;
    /**The Location Id field uniquely identifies the location of the sender of a message */
    get LocationID(): IIdentifierType;
    /**The Service Id field identifies the particular service from which a message is being sent */
    get ServiceID(): IIdentifierType;
    /**The number of nouns that are included in the BOD */
    get NounCountNumeric(): INumericType;
}

/**Identifies the sender of the given BOD instance */
export interface ISenderBaseType {
    /**This is the logical location of the server and application from which the BOD originated */
    get LogicalID(): IIdentifierType;
    /**DCS software code name */
    get ComponentID(): IIdentifierType;
    /**This describes the business event that initiated the need for the BOD to be created */
    get TaskID(): IIdentifierType;
    /**Enables the sending application to indicate the instance identifier of the event or task that caused the BOD to be created */
    get ReferenceID(): IIdentifierType;
    get ConfirmationCode(): IConfirmationEnumeratedType; //scl
    /**Identifies the authorization level of the user or application that is sending the BOD message */
    get AuthorizationID(): IIdentifierType;
}

export interface IDestinationType {
    /**Code for destination of file */
    get DestinationNameCode(): ICodeType;
    /**Physical address of the destination */
    get DestinationURI(): IURIType;
    /**Additional information about the destination application */
    get DestinationSoftwareCode(): ITextType;
    /**For which software destination file is intended */
    get DstinationSoftware(): ITextType;
    /**Target Dealer Code receiving information */
    get DealerNumberID(): IIdentifierType;
    /**Dealer code store number */
    get StoreNumber(): ITextType;
    /**Dealer code area number */
    get AreaNumber(): ITextType;
    /**Target Dealer country location */
    get DealerTargetCountry(): ICountryEnumeratedType;
    /**The Party Receiver Id field uniquely identifies the receiver of the message */
    get PartyReceiverID(): IIdentifierType;
    /**The Location Receiver Id field uniquely identifies the location of the Receiver of a message.  
     * This Id may be aligned with a physical address or data centers.  
     * This field provides an additional level of granularity beyond the usage of the Party Id for additional routing and deliver of data */
    get LocationReceiverID(): IIdentifierType;
    /**The Service Message Id field identifies the particular service to which a message is being sent, e.g., an inventory service */
    get ServiceMessageID(): IIdentifierType;
}

/**Show Vehicle Inventory Data Area */
export interface IShowVehicleInventoryDataAreaType {
    /**The Show verb is used when sending the information about a specific instance of a business document or entity. The Show verb may be used to respond to a Get request or it can be used in a publish scenario, where it pushes information to other applications based on a business event.Although BODs based on this verb do not commonly cause updates to occur, there may be times when the component receiving the Show decides to use the information it receives to update. This is entirely the decision of the receiving software component and is not forbidden.The behavior of the Show verb is quite straight forward with one exception. The Show response to any Get request needs to read the request carefully to ensure the response is returning the requested Data Types. */
    get Show(): IShowType;
    /**VehicleInventory supports the transmission of  Vehicle Inventory information 
    to the dealership. Vehicle Inventory is the task of sending the Vehicle 
    Inventory information electronically between Dealer and OEM systems.  */
    get VehicleInventory(): Iterable<IVehicleInventoryType>;
}

export interface IShowType extends IResponseVerbType {
    get recordSetStartNumber(): IAttribute<IPositiveIntegerNumericType>; //oagis
    get recordSetCount(): IAttribute<IPositiveIntegerNumericType>; //oagis
    get recordSetTotal(): IAttribute<IPositiveIntegerNumericType>; //oagis
    get recordSetCompleteIndicator(): IAttribute<IIndicatorType>;
    get recordSetReferenceId(): IAttribute<INormalizedStringType>; //qdt
}

export interface IResponseVerbType extends IVerbType /**oagis */ {
    /**A copy of the ApplicationArea for the original BOD that was processed. Present either as additional reference information, or for use in identifying the BOD in situations where a BODReference is not known. */
    get OriginalApplicationArea(): IApplicationAreaType;
    /**IDentifies the content that is returned, given a Get query success or the response from the Proces */
    get ResponseCriteria(): Iterable<IResponseCriteria>;//oagis
}

export interface IVehicleInventoryType {
    /**Vehicle Inventory Header */
    get VehicleInventoryHeader(): IVehicleInventoryHeaderType;
    /**Detailed information regarding a vehicle in inventory. */
    get VehicleInventoryInvoice(): Iterable<IVehicleInventoryInvoiceType>;
}

export interface IVehicleInventoryHeaderType extends IHeaderBaseType {
    /**Date of invoice */
    get InvoiceDate(): IDateType;
    /**Type of transaction */
    get TransactionTypeCode(): ITransactionTypeCodeEnumeratedType;
    /**The party to which good or services were sold. */
    get SoldToParty(): IPartyABIEType;
    /**The party receiving the goods or services. */
    get ShipToParty(): IPartyABIEType;
    /**The person or organization that manufactures an item. */
    get ManufacturerParty(): IPartyABIEType;
}

export interface IHeaderBaseType {
    /**Is the date and time the document was last created.  This is not the date and time that the BOD message instance was created */
    get DocumentDateTime(): IDateTimeType;
    /**Secondary password used to validate access to the dealer information */
    get SecondaryPassword(): ITextType;
    /**Identifies secondary dealer number if different than primary Dealer Number */
    get SecondaryDealerNumberID(): IIdentifierType;
    /**A group of identifications that uniquely identifies this document */
    get DocumentIdentificationGroup(): IRequired<IDocumentIdentificationGroupType>;
}

/**A list of identifications related to a particular document */
export interface IDocumentIdentificationGroupType {
    /**A group of identifications that uniquely identifies this document */
    get DocumentIdentification(): IRequired<IDocumentIdentificationType>;
    /**An alternate identification that uniquely identifies this document in addition to the Document ID, e.g., Part Order Number, Parts Purchase Order Number or Parts Invoice Number. */
    get AlternateDocumentIdentification(): Iterable<IDocumentIdentificationType>;
}

/**An identifier for this document */
export interface IDocumentIdentificationType {
    /**The DocumentID is the identifier for the document */
    get DocumentID(): IRequired<IIdentifierType>;
    /**The agency role that defined the Document ID */
    get AgencyRoleCode(): IAgencyRoleCodeType;
}

/**This is the base Party component based off the UNCEFACT Core Component */
export interface IPartyABIEType {
    /**Party identification number used to uniquely identify a party */
    get PartyID(): Iterable<IIdentifierType>;
    /**Code identifying a physical location */
    get LocationID(): IIdentifierType;
    /**The Dealer Management System ID assigned to a party */
    get DealerManagementSystemID(): IIdentifierType;
    get AuthorizationID(): IIdentifierType;
    /**Indicates the Business Party's relationship to the primary party */
    get RelationshipTypeCode(): ICodeType;
    /**Any special remarks regarding a party */
    get SpecialRemarksDescription(): Iterable<ITextType>;
    /**An alternate collection of data for a piece of written, printed, or electronic matter that provides information or evidence of a party. */
    get AlternatePartyDocument(): Iterable<IDocumentABIEType>;
    // Can have SpecifiedOrganization or SpecifiedPerson, but not both
    /**A specific organization represented in a party, or other component. */
    get SpecifiedOrganization(): IOrganizationABIEType;
    /**Identifies a specific individual or person. */
    get SpecifiedPerson(): IPersonType;
    /**Any privacy rights the party has subscribed to or opted out of. */
    get Privacy(): Iterable<IPrivacyType>;
    /**Preferred language */
    get PreferredLanguageCode(): ILanguageCodeType;
    /**The number assigned to the customer by the manufacturer's systems */
    get ManufacturerCustomerID(): IIdentifierType;
    /**The number assigned to the customer's household by the manufacturer's systems */
    get ManufacturerHouseholdID(): IIdentifierType;
    /**An action taken for an event by or in behalf of the party. This can be used to track the creation of the party, deletion, or end date. This action is dirrectly related to the party. */
    get PartyActionEvent(): Iterable<IEventType>;
    /**Part flag indicating that part was sold to another dealer */
    get DealerIndicator(): IIndicatorType;
}

/**A collection of data for a piece of written, printed or electronic matter that provides information or evidence */
export interface IDocumentABIEType {
    /**The DocumentID is the identifier for the Document.  This identifier is a GUID or other unique identifier set by the creator of the document */
    get DocumentID(): IRequired<IIdentifierType>;
    /**A code specifying the agency type issuing the document */
    get DocumentType(): IAssigningOrganizationPartyIdType; //sqdt
    /**An issuing name for this document, like a state or other agency */
    get IssuingName(): ITextType;
    /**The period which this document is effective */
    get EffectivePeriod(): IPeriodABIEType;
}

/**A specific period of time such as the length of time between two known date/time points, from a start date onwards, or up to an end date */
export interface IPeriodABIEType {
    /**The measure of the length of time for this time period such as hours, days, weeks, months, years */
    get DurationMeasure(): ITimeMeasureType;
    /**The indication of whether or not the start and end dates are included in this period */
    get InclusiveIndicator(): IIndicatorType;
    /**The date, time, date time or other date time value for the start of this period of time */
    get StartDateTime(): IDateTimeType;
    /**A date, time, date time or other date time value which specifies the end of the period of time */
    get EndDateTime(): IDateTimeType;
    /**The date, time, date time or other date time value for a complete period of time expressed as a specific month, a specific week etc. type code for a particular bulletin */
    get CompleteDateTime(): IDateTimeType;
    /**The indication of whether o rnot an entity is open during this period */
    get OpenIndicator(): IIndicatorType;
    /**The DaysOfWeek component is used to identify availability based on days of the week */
    get DayOfWeekCode(): IDayOfWeekCodeType; //sqdt
}

/**The organization component is based on the UNCEFACT Organization Core Component */
export interface IOrganizationABIEType {
    /**A code identifying type of Business */
    get BusinessTypeCode(): ICodeType;
    /**Company name of business entity */
    get CompanyName(): INameType;
    /**Member identification number of affiliate organization */
    get OrganizationID(): IIdentifierType;
    /**An identifier for the District an organization resides */
    get DistrictID(): IIdentifierType;
    /**Manufacturer branch code */
    get BranchCode(): ICodeType;
    /**Manufacturer company code */
    get CompanyCode(): ICodeType;
    /**Manufacturer division code */
    get DivisionCode(): ICodeType;
    /**Manufacturer service center code */
    get ServiceCenterCode(): ICodeType;
    /**The company that is securing or underwriting the loan */
    get HoldingCompanyName(): INameType;
    /**A primary person or department that acts as a point of contact with another peson or department.  */
    get PrimaryContact(): Iterable<IContactABIEType>;
    /**The location at which mail is delivered. */
    get PostalAddress(): IAddressABIEType;
    get DoingBusinessAsName(): ITextType;
    /**The code specifying the legal classification of this organization */
    get LegalClassificationCode(): ICodeType;
    /**The creation date and time that a business was started */
    get InceptionDateTime(): IDateTimeType;
    /**Number of employees in the organization */
    get NumberOfEmployeesNumeric(): INumericType;
    /**Full description of the company or organization */
    get CompanyDescription(): Iterable<ITextType>;
}

/**A person or department that acts as a point of contact with another person or department */
export interface IContactABIEType {
    /**A unique identifier for this contact */
    get ID(): Iterable<IIdentifierType>;
    /**The job title, position or designation, expressed as text, of this contact person within an organization such as Director, Software Engineer, Purchasing Manager */
    get JobTitle(): ITextType;
    /**The responsibilities, expressed as text, of this contact */
    get Responsibility(): ITextType;
    /**The name, expressed as text, of the department to which this contact belongs within an organization such as a support department */
    get DepartmentName(): ITextType;
    /**A code specifying the type of contact */
    get TypeCode(): IRequired<ICodeType>;
    // Can have either PersonName or SpecifiedPerson, but not both
    /**The name, expressed as text, of this contact person */
    get PersonName(): IRequired<ITextType>;
    /**Identifies a specific individual or person. */
    get SpecifiedPerson(): IRequired<IPersonType>;
    /**Telephone communication information for this contact */
    get TelephoneCommunication(): Iterable<ICommunicationABIEType>
    /**The preference for usage of this contact such as type, order or importance, availability, or some other criteria */
    get UsagePreference(): IPreferenceABIEType;
    /**Postal address information for this contact */
    get PostalAddress(): IAddressABIEType;
    /**Fax communication for this contact */
    get FaxCommunication(): Iterable<ICommunicationABIEType>;
    /**Uniform Resource Identifier (URI) communication information for this contact such as an email address */
    get URICommunication(): Iterable<ICommunicationABIEType>;
    /**Indicates the preferred method of contact */
    get ContactMethodTypeCode(): IContactMethodTypeCodeType;
}

/**The person component is based off the UNCEFACT Person Core Component */
export interface IPersonType {
    get ID(): Iterable<IIdentifierType>;
    get GivenName(): Iterable<INameType>;
    /**Another name that a person is known by */
    get Alias(): ITextType;
    /**Middle initial of business party */
    get MiddleName(): INameType;
    get FamilyName(): Iterable<INameType>
    /**A general or descriptive heading given to a person, or item */
    get Title(): ITextType;
    /**A word or phrase of greeting used to begin a letter or message */
    get Salutation(): ITextType;
    /**A word or phrase added to the end of a name */
    get NameSuffix(): ITextType;
    /**Identifies marital status of business party */
    get MaritalStatusCode(): IMaritalStatusEnumeratedType;
    /**Gender of party */
    get GenderCode(): IGenderEnumeratedType;
    /**Birth date of party */
    get BirthDate(): IDateType;
    get AgeMeasure(): ITimeMeasureType;
    /**The family name for a woman before she was married */
    get MaidenName(): ITextType;
    /**A name that a person prefers to be known */
    get PreferredName(): ITextType;
    /**The location at which a particular person may be found or reached. */
    get ResidenceAddress(): IAddressABIEType;
    /**Telephone Communication information like phone number */
    get TelephoneCommunication(): Iterable<ICommunicationABIEType>;
    /**Fax communication includes fax number or mailto address */
    get FaxCommunication(): ICommunicationABIEType;
    /**Email or web communication */
    get URICommunication(): Iterable<ICommunicationABIEType>;
    /**The ISO Country Codelist used to indicate a person's nationality */
    get NationalityCountryID(): ICountryCodeType;
    /**Indicates the preferred method of contact */
    get ContactMethodTypeCode(): IContactMethodTypeCodeType;
    /**The spoken language for a person.  This may occur multiple times if they speak more than one language */
    get LanguageCode(): Iterable<ILanguageCodeType>;
    /**The location at which mail is delivered. */
    get PostalAddress(): Iterable<IAddressABIEType>;
    /**Original contact method for this person */
    get OriginalContactMethodTypeCode(): IContactMethodTypeCodeType;
    /**Occupation for this person */
    get SpecifiedOccupation(): Iterable<IOccupationABIEType>;
    /**Personal trait */
    get Trait(): Iterable<ITraitType>;
    /**Code which indicates the customer status of the person */
    get CustomerStatusCode(): ICodeType;
    /**Number of days tolerance for recorded date of birth */
    get DateOfBirthToleranceNumeric(): INumericType;
}

/**A common address format */
export interface IAddressABIEType {
    /**A unique identifier for this address */
    get AddressID(): IIdentifierType;
    /**A code specifying the type of this address such as business address or home address */
    get AddressType(): ICodeType;
    /**The person or business entity that the information should be sent */
    get AttentionOf(): ITextType;
    /**Used to send mail to someone at someone else's address */
    get CareOf(): ITextType;
    // Can have the Structured or the Unstructured, but not both
    //#region Structured
    /**A free formatted text line, typically used by an address */
    get LineOne(): ITextType;
    /**A free formatted text line, typically used by an address */
    get LineTwo(): ITextType;
    /**A free formatted text line, typically used by an address */
    get LineThree(): ITextType;
    /**A free formatted text line, typically used by an address */
    get LineFour(): ITextType;
    /**A free formatted text line, typically used by an address */
    get LineFive(): ITextType;
    //#endregion
    //#region Unstructured
    /**The number, expressed as text, of a building or house on a street at this address */
    get BuildingNumber(): ITextType;
    /**The name, expressed as text, of a building, a house, or other structure on a street at this address */
    get BulidingName(): ITextType;
    /**The name, expressed as text, of a street or thoroughfare */
    get StreetName(): ITextType;
    /**The identification by name or number, expressed as text, of the floor in a building as part of an address */
    get FloorIdentification(): ITextType;
    /**The unique identifier, expressed as text, of a container commonly referred to as a box, 
     * in a post office or other postal service location, assigned to a person or organization, 
     * where postal items may be kept for this address */
    get PostOfficeBox(): ITextType;
    /**The building number suffic of the address */
    get BuildingNumberSuffix(): ITextType;
    //#endregion
    /**A textual representation of the City Sub-Division Name of the address; 
     * Actual name of field is CitySub-DivisionName */
    get CitySubDivisionName(): Iterable<ITextType>;
    /**A textual representation of the City of the Address */
    get CityName(): ITextType;
    /**A unique country identifier of this Address */
    get CountryID(): ICountryCodeType;
    /**A code specifying the Post Code for this Address */
    get Postcode(): ICodeType;
    /**State or Province;
     * Actual name is StateOrProvinceCountrySub-DivisionID*/
    get StateOrProvinceCountrySubDivisionID(): IIdentifierType;
    /**A county or other regional jurisdiction within a country, state or province; 
     * actual name is CountyCountrySub-Division */
    get CountyCountrySubDivision(): ITextType;
    /**A date and time that the Address was last updated */
    get AddressUpdateDateTime(): IDateTimeType;
    /**Use to record permission to use this address */
    get Privacy(): Iterable<IPrivacyType>;
    /**The code specifying the use of this communication such as for business purposes or private */
    get UseCode(): ICodeType;
    /**Add city codes or standardized city acronym or abbreviation */
    get CityNameAbbreviation(): Iterable<ICodeType>;
}

export interface IPrivacyType {
    /**Indicator to note that Business Party has requested to share or to not share information with third parties. */
    get PrivacyIndicator(): IIndicatorType;
    get PrivacyTypeString(): IStringType;
    /**The start and end dates for the period that privacy should be applied. */
    get PrivacyPeriod(): IPeriodABIEType;
}

/**The exchange of thoughts, messages, or information, as by speech, signals, writing, or behaviour between persons and/or organizations */
export interface ICommunicationABIEType {
    /**The unique identifier of the Uniform Resource Identifier (URI) for this communication such as an email address */
    get URIID(): IIdentifierType;
    /**The code specifying the channel or manner in which a communication can be made, such as telephone or email */
    get ChannelCode(): IRequired<ICodeType>;
    /**The communication number, expressed as text and not including country access code or the area number code, for this communication */
    get LocalNumber(): ITextType;
    /**The text string of characters that make up the complete number for this communication */
    get CompleteNumber(): ITextType;
    /**The country access code for this communication number such as 44, 1, 353 */
    get CountryNumberCode(): ICodeType;
    /**The extension number, expressed as text, assigned to this communication number to enable a caller to reach a specific party */
    get ExtensionNumber(): ITextType;
    /**The code specifying the area number typically used in communication.  This is also known in the US as the Area Code */
    get AreaNumberCode(): ICodeType;
    /**Access information, expressed as text, for the mode of communication such as 9 of *70 for a telephone network */
    get Access(): ITextType;
    /**The code specifying the use of this communication such as for business purposes or private.  Such as Home, Work, Cell, Day, Evening, etc. */
    get UseCode(): ICodeType;
    /**The text to identify a service provider */
    get ServiceProviderName(): ITextType;
    /**The indication of whether or not HTML format is preferred by the recipient for email communications.  Usually sent in Communication components when ChannelCode is telephone and the URIID has a mailto: email address */
    get HTMLPreferredIndicator(): IIndicatorType;
    /**The preference for the usage of this communication method */
    get UsagePreference(): IPreferenceABIEType;
    /**This is used to indicate the various privacy types for this communication.  If appearing within a Party component, then this option overrides the Privacy types specified at the Party component for this communication */
    get Privacy(): Iterable<IPrivacyType>;
}

/**Precedence, advantage, or choice of one person or thing over another */
export interface IPreferenceABIEType {
    /**The number of the priority ranking of this preference */
    get PriorityRankingNumeric(): INumericType;
    /**The indication of whether or not this preference is the preferred option */
    get PreferredIndicator(): IIndicatorType;
    /**A period when a preference is not available */
    get UnavailablePeriod(): IPeriodABIEType;
    /**A period when a preference is available */
    get AvailablePeriod(): Iterable<IPeriodABIEType>;
}

/**Based on the UNCEFACT Occupation Core Component from the CCL 9b */
export interface IOccupationABIEType {
    /**The code specifying the type of the occupation */
    get TypeCode(): ICodeType;
    /**The occupation title */
    get Title(): Iterable<ITextType>;
    /**The textual description of the occupation */
    get Description(): Iterable<ITextType>;
    /**The code specifying the class of the occupation, such as accountancy, banking, car delivery */
    get ClassCode(): ICodeType;
    /**The code specifying the relative importance of this occupation with respect to the person's other occupations such as main occupation, secondary occupation */
    get RankingCode(): ICodeType;
    /**The indication of whether or not the occupation is full-time */
    get FullTimeIndicator(): IIndicatorType;
    /**A period of time during which this occupation has been held */
    get PeriodHeld(): IPeriodABIEType;
}

/**Customer trait */
export interface ITraitType {
    /**Descriptive text for the trait */
    get TraitText(): Iterable<ITextType>;
    /**Grouping code for the trait */
    get TraitGroupCode(): ICodeType;
    /**Code for the trait */
    get TraitTypeCode(): ICodeType;
}

/**A significant occurrence or happening related to an object process, or person */
export interface IEventType {
    /**A unique identifier for an event */
    get EventID(): IIdentifierType;
    /**Enumerated list of unusual event types */
    get EventTypeCode(): IEventTypeCodeType;
    /**A textual description of the event */
    get EventDescription(): ITextType;
    /**A date, time, date time, or other date time value of an occurrence of this event.  
     * This could be used to track such dates and times of creation, deletion, etc. */
    get EventOccurrenceDateTime(): IDateTimeType;
}

export interface IVehicleInventoryInvoiceType {
    /**Invoice number */
    get InvoiceNumberString(): IStringType;
    /**Invoice Total */
    get InvoiceTotalAmount(): IAmountType;
    /**Shipment carrier-assigned load number */
    get LoadNumberString(): IStringType;
    /**Border Crossing Indicator */
    get BorderCrossingIndicator(): IIndicatorType;
    /**Estimated time of arrival */
    get ETADate(): IDateType;
    /**Carrier Code */
    get CarrierID(): IIdentifierType;
    /**Warehouse Number */
    get WarehouseID(): IIdentifierType;
    /**DAte order originally placed */
    get OrderDate(): IDateType;
    /**Detail information regarding a vehicle for a particular invoice. */
    get VehicleInventoryVehicleLineItem(): Iterable<IVehicleInventoryVehicleLineItemType>;
    /**The Tax component represents information about a particular tax including information about the type of tax and the amount of the tax. */
    get Tax(): Iterable<ITaxType>;
    /**The number given to an order by a dealer */
    get DealerAssignedNumberString(): IStringType;
    /**The date the current status was recorded */
    get StatusDate(): IDateType;
    /**The date the OEM expects to build the vehicle */
    get TargetBuildDate(): IDateType;
    /**A code representing a reject reason */
    get RejectCode(): ICodeType;
    /**Information about option restrictions on the vehicle */
    get OptionRestrictionStatements(): ITextType;
    /**Representing hold status */
    get HoldCodeIndicator(): IIndicatorType;
    /**A code indicating who has action to take to address a reject */
    get RejectResponsibilityCode(): ICodeType;
    /**Indicator if a vehicle is being advertised online */
    get VehiclePromoteStatus(): IIndicatorType;
    /**Indicator if a vehicle has been held by customer or by dealer */
    get VehicleHoldStatus(): ITextType;
}

export interface IVehicleInventoryVehicleLineItemType {
    /**Common Vehicle component */
    get Vehicle(): IVehicleABIEType;
    /**Vehicle Branding Information */
    get BrandedInfo(): IBrandedInfoType;
    /**The date the item was sold */
    get OriginalSoldDate(): IDateType;
    /**Odometer reading of vehicle at time of delivery */
    get DeliveryDistanceMeasure(): ILengthMeasureType;
    /**Door Key Number */
    get DoorKeyNumberString(): IStringType;
    /**Vehicle Ignition Key Number */
    get IgnitionKeyNumberString(): IStringType;
    /**Indicates whether the vehicle was produced for the United States or not */
    get NonUSVehicleIndicator(): IIndicatorType;
    /**Status of odmeter at trade-in */
    get OdometerStatus(): ITextType;
    /**The owner of a vehicle, boat, engine, truck, trailer, or other item */
    get OwnerParty(): IPartyABIEType;
    /**Indication that vehicle has restrictions on its use */
    get RestrictionIndicator(): IIndicatorType;
    /**Description of vehicle use restrictions */
    get RestrictionDescription(): ITextType;
    /**The party receiving the goods or services. */
    get ShipToParty(): IPartyABIEType;
    /**The party to which good or services were sold */
    get SoldToParty(): IPartyABIEType;
    /**Indication whether Telematics Service Subscription is turned on */
    get TelematicsServiceIndicator(): IIndicatorType;
    /**Date vehicle was allocated and/or a delivery work order was cut */
    get VehicleAllocatedDate(): IDateType;
    /**Indicates whether vehicle was ever a demo */
    get VehicleDemoIndicator(): IIndicatorType;
    /**Vehicle Order Number */
    get VehicleOrderNumber(): ITextType;
    /**Date shipped from warehouse or distribution center */
    get VehicleShipDate(): IDateType;
    /**Dealer assigned vehicle stock number */
    get VehicleStockString(): IStringType;
    /**Provides pricing infomation. */
    get Pricing(): Iterable<IPricingABIEType>;
    /**Dealer incentives */
    get Incentive(): Iterable<IIncentiveABIEType>
    /**The Tax component represents information about a particular tax including information about the type of tax and the amount of the tax. */
    get Tax(): Iterable<ITaxType>;
    get FleetAccount(): IFleetAccountType;
    /**State License plate number of vehicle */
    get LicenseNumberString(): IStringType;
    /**Vehicle status code */
    get VehicleStatusCode(): ICodeType;
    /**The Option represents information about a vehicle's options. */
    get Option(): Iterable<IOptionABIEType>;
    /**An indicator of vehicle's logistics information as it relates to its progress through the distribution pipeline */
    get VehicleActivityStatus(): ITextType;
    /**Communicates the method of acquisition of the used vehicle */
    get AcquisitionMethod(): ICodeType;
    /**Date the vehicle was acquired */
    get ItemAcquisitionDate(): IDateType;
    /**The location where the vehicle is physically stored.  Can be used to track the lot where the vehicle is stored at */
    get LocationID(): IIdentifierType;
    /**Date of the Vehicle Status change. */
    get VehicleStatusDate(): IDateType;
    /**Date of the Vehicle Activity Status DAte change. */
    get VehicleActivityStatusDate(): IDateType;
    /**Service Campaign (Recall) associated with sublet */
    get VehicleInventoryServiceCampaign(): Iterable<IServiceCampaignType>;
    /**Provides indicator information. on Critical Recalls, based on which important decisions can be made */
    get CriticalRecallIndicator(): IIndicatorType;
    /**The ImageAttachmentExtended component contains information about an image being attached to a BOD, e.g., image size, image type, image file name, etc. */
    get ImageAttachmentExtended(): Iterable<IImageAttachmentExtendedType>;
    /**Date that the vehicle was added to the dealer's inventory */
    get DealerInventoryDate(): IDateType;
    /**Number of days that the vehicle has been in the dealer's inventory */
    get DaysInInventory(): INumericType;
    /**Date vehicle was placed into service */
    get InServiceDate(): IDateType;
    /**Odometer reading of vehicle when it was placed into service */
    get InServiceOdometer(): ILengthMeasureType;
}

export interface IVehicleABIEType {
    /**Manufacturer-assigned model code of vehicle - Usually available in the VIN number (use NCIC code) */
    get Model(): ITextType;
    /**Vehicle designated year */
    get ModelYear(): IYearDateType;
    /**Descriptive vehicle model */
    get ModelDescription(): Iterable<ITextType>;
    /**Vehicle make code - usually available in the VIN number (use NCIC code) */
    get MakeString(): IStringType;
    /**Class of sale */
    get SaleClassCode(): ISaleClassEnumeratedType;
    /**Condition of vehicle */
    get Condition(): ITextType;
    /**Any vehicle related notes */
    get VehicleNote(): Iterable<ITextType>;
    /**Manufacturer assigned trim code */
    get TrimCode(): ICodeType;
    /**Number of doors on vehicle */
    get DoorsQuantityNumeric(): INumericType;
    /**Manufacturer-assigned vehicle body style */
    get BodyStyle(): ITextType;
    /**Details describing the transmission of a vehicle, truck, boat, etc. */
    get TransmissionGroup(): ITransmissionGroupType;
    get ColorGroup(): Iterable<IColorGroupType>;
    /**Vehicle Class */
    get VehicleClassCode(): VehicleClassEnumeratedType;
    /**Type of vehicle fuel */
    get FuelTypeCode(): IFuelTypeCodeType;
    /**Indicates whether the vehicle is 2 or 4 wheel drive */
    get DriveTrain(): ITextType;
    /**Designates Vehicle Drive Type */
    get DriveTypeCode(): IDriveTypeEnumeratedType;
    /**Passenger/seat capacity count of vehicle */
    get VehiclePassengersNumeric(): INumericType;
    /**Describes the engine on the vehicle */
    get Engine(): Iterable<IEngineType>;
    /** The Vehicle identification. This could be the VIN, HIN, or some other unique identifier for a vehicle. 
            This optional element allows only one vehicle ID for a given Vehicle. However, for some type 
            of vehicles (e.g. construction equipment), the need arises to record more than one VehicleID for a Vehicle. 
            If more than one vehicle ID must be recorded, please use the "VehicleIdentificationGroup" element below.  */
    get VehicleID(): IIdentifierType;
    /**The code on the axle of the vehicle */
    get AxleCode(): ICodeType;
    /**Manufacturer name */
    get ManufacturerName(): INameType;
    /**Vehicle weight */
    get VehicleWeightMeasure(): IWeightMeasureType;
    /**Gross weight */
    get GrossWeightMeasure(): IWeightMeasureType;
    /**The weight of the item without any load.  If the item has a trailer, this would be the weight of the item minus it */
    get UnloadedVehicleWeightMeasure(): IWeightMeasureType;
    /**Grouping of similar models for order management purposes */
    get ModelGroup(): ITextType;
    /**Model Year can change indicator */
    get ModelYearChangeIndicator(): IIndicatorType;
    /**Alternate model code, usually used for vehicle ordering */
    get DistributorModelCode(): ITextType;
    /**Indicates the specific class of vehicle attached to the model description */
    get ModelClass(): ITextType;
    /**A government issued registration identifier for a vehicle */
    get RegistrationID(): IIdentifierType;
    /**Length of the vehicle */
    get VehicleLengthMeasure(): ILengthMeasureType;
    /**A general term that refers to all of the mechanical parts of a car attached to a structural frame. In cars with unitized construction, the chassis comprises everything but the body of the car. */
    get Chassis(): IChassisType;
    /**The model series code for the specified vehicle */
    get SeriesCode(): ICodeType;
    /**The name corersponding to the Series Code */
    get SeriesName(): ICodeType;
    /**Dealer assigned vehicle stock number */
    get VehicleStockString(): IStringType;
    /**A detailed description for the vehicle */
    get VehicleDescription(): Iterable<ITextType>;
    /**Indicates the weight of the item when all fluids are empty */
    get DryWeightMeasure(): IWeightMeasureType;
    /**Indicates the weight of the item when all fluids are added */
    get WetWeightMeasure(): IWeightMeasureType;
    /**Indicates the weight of the item when all fluids are added */
    get Tank(): Iterable<ITankType>;
    /**The maximum speed at which a particular vehicle configuration may obtain. This includes the entire configuration of the vehicle. */
    get MaximumSpeedMeasure(): ISpeedMeasureType;
    /**The height, length, and width of a vehicle. */
    get VehicleDimension(): IDimensionType;
    /**The horizontal distance between the center of the front wheel, and the center of the rear wheel */
    get WheelBaseMeasure(): ILengthMeasureType;
    /**Size of the smallest circular turn that the vehicle is capable of making */
    get TurningRadiusMeasure(): ILengthMeasureType;
    /**Amount of space between the base of a vehicle tie and the underside of the chassis */
    get GroundClearanceMeasure(): ILengthMeasureType;
    /**The distance from the ground to the top of the seat.  Used primarily with ATVs. */
    get SeatHeightMeasure(): ILengthMeasureType;
    /**A measurement describing the upper limit to the weight of a trailer a vehicle can tow */
    get TowingCapacityWeightMeasure(): IWeightMeasureType;
    get CertificationGroup(): ICertificationGroupType;
    /**A measurement for describing the payload capacity of the vehicle */
    get PayloadCapacityWeightMeasure(): IWeightMeasureType;
    /**Description of the interior condition of a preowned vehicle */
    get InteriorDescription(): ITextType;
    /**The vehicle's front axle weight */
    get FrontAxleWeight(): IWeightMeasureType;
    /**The vehicle's rear axle weight */
    get RearAxleWeight(): IWeightMeasureType;
    /**The grouping of vehicle identifications */
    get VehicleIdentificationGroup(): IVehicleIdentificationGroupType;
    /**A code identifying a particular market-specific configuration */
    get MarketConfigurationCode(): ITextType;
    /**Country where the vehicle has been exported to */
    get CountryExportedTo(): ICountryCodeType;
    /**Indicates industry/area where the vehicle operates */
    get VehicleOperation(): ITextType;
    /**Indicates type of operations the vehicle is used in */
    get VehicleAppolication(): ITextType;
    /**Component to communicate important dates and events for a vehicle. */
    get VehicleHistoryDateGroup(): Iterable<IVehicleHistoryDateGroupType>;
    /**Code to indicate the product option and variations within a function or property */
    get VariantID(): Iterable<IIdentifierType>;
    /**Description of the produc option and variations within a function or property */
    get VariantDescription(): Iterable<ITextType>;
    /**Used to alter the basic specification of a standard vehicle.  This is done by adding and deleting parts as required and possibly reconfiguring the truck to suit a customer's specific requirements */
    get CustomerAdaptations(): Iterable<IIdentifierType>;
    /**Also called 5-Note, used to alter the basic specifications of a standard vehicle */
    get CustomerAdaptationsDescription(): Iterable<ITextType>;
    /**Status code to indicate the reason why the vehicle became inactive; used to filter out campaigns */
    get InactiveCode():  ITextType;
    /**Used to identify if the vehicle is in project mode or in serial production */
    get Project(): ITextType;
    /**USed to identify if a vehicle is development or design vehicle */
    get Development(): ITextType;
    /**State or province where vehicle is registered */
    get RegistrationStateProvince(): ITextType;
    /**Country where vehicle is registered */
    get RegistrationCountry(): ICountryCodeType;
    /**The Option represents information about a vehicle's options. */
    get Option(): Iterable<IOptionABIEType>;
    /**The vehicle's major assemblies. */
    get VehicleMajorPartsProductItem(): Iterable<IPartsProductItemType>;
    /**Used to communicate product class codes. */
    get ProductClassCode(): ICodeType;
    /**Used to communicate product class code description */
    get ProductClassCodeDescription(): ITextType;
    /**To communicate telematatics status and subscription information. */
    get TelematicsSubscription(): Iterable<ITelematicsSubscriptionType>;
}

/**The detail information regarding a boat that is owned by an individual or organization */
export interface ITransmissionGroupType {
    /**Transmission Serial Number */
    get TransmissionCode(): ICodeType;
    /**Vehicle Transmission Type */
    get TransmissionTypeCode(): ITransmissionTypeEnumeratedType;
    /**Name of transmission type */
    get TransmissionTypeName(): ITextType
}

/**The ColorGroup component provides color information about a specific item */
export interface IColorGroupType {
    /**Identifies the item for which color is being described */
    get ColorItemCode(): IRequired<IColorItemEnumeratedType>;
    /**Manufacturer-assigned color code */
    get ManufacturerColorCode(): ICodeType;
    /**Description of a color */
    get ColorDescription(): Iterable<ITextType>;
    /**The name of a color */
    get ColorName(): INameType;
    /**Indicates wheter or not the color code can be changed */
    get ColorCodeChangeIndicator(): IIndicatorType;
}

/**The engine component provides detail information about an engine */
export interface IEngineType {
    /**Deprecated: Use VehicleMake */
    get MakeString(): IDeprecated<IStringType>;
    /**Description vehicle model */
    get ModelDescription(): Iterable<ITextType>;
    /**Vehicle designated model year */
    get ModelYear(): IYearDateType;
    /**Class of sale */
    get SaleClassCode(): ISaleClassEnumeratedType;
    /**Condition of vehicle */
    get Condition(): ITextType;
    /**Manufacturer-assigned model code of vehicle - usually available in the VIN number (use NCIC code) */
    get Model(): ITextType;
    /**Dealer assigned vehicle stock string */
    get VehicleStockString(): IStringType;
    get ColorGroup(): Iterable<IColorGroupType>;
    /**Type of engine or or for a boat */
    get BoatEngineTypeCode(): IBoatEngineTypeEnumeratedType;
    /**Type of vehicle fuel */
    get FuelTypeCode(): IFuelTypeCodeType;
    /**Measured in RPM is the prop speed at full throttle */
    get FullThrottleOperatingRangeMaximumMeasure(): ISpeedMeasureType;
    /**Measured in RPM is the prop speed at minimum throttle */
    get IdleRevolutionPerMinuteForwardGearMinimumMeasure (): ISpeedMeasureType;
    /**The amount of current in amps that the alternator can supply */
    get AlternatorOutputMeasure(): IElectricityMeasureType;
    /**Battery size required to start the engine in CCA (Cold Cranking Amps) */
    get BatterySizeRequirementsMeasure(): IElectricityMeasureType;
    /**Current required to run the electric motor */
    get CurrentDrawMeasure(): IElectricityMeasureType;
    /**Maximum thrust produced by the electric motor */
    get PeakThrustMeasure(): IForceMeasureType;
    /**The size of the engine piston/cylinder */
    get BoreMeasure(): ILengthMeasureType;
    /**Piston movement distance */
    get StrokeMeasure(): ILengthMeasureType;
    /**Indicates the way the engine cylinder is configured */
    get CylinderConfigurationCode(): ICylinderConfigurationEnumeratedType;
    /**Represents the number of cylinders in the vehicle engine */
    get NumberOfEngineCylindersNumeric(): INumericType;
    /**The type of system used to get the fuel into the engine cylinders */
    get FuelIndicationSystemCode(): ICodeType;
    /**Defines the location on the boat that the engine can be mounted */
    get BoatEngineLocationCode(): IBoatEngineLocationCodeType;
    /**Amount of fuel consumed by the engine */
    get FuelConsumptionMeasure(): IFuelConsumptionMeasureType;
    /**Total hours of engine(s) use */
    get TotalEngineHoursNumeric(): INumericType;
    /**Indicates if the engine has a power trim */
    get PowerTrimIndicator(): IIndicatorType;
    /**The method required to start the engine */
    get StartingSystemTypeCode(): IStartingSystemTypeEnumeratedType;
    /**System used to fire the engine */
    get IgnitionSystem(): ITextType;
    /**System used to lubricate the engine */
    get LubricationSystem(): ITextType;
    /**System used to cool the engine */
    get CoolingSystem(): ITextType;
    /**How much pollution the engine is rated to put out */
    get Emissions(): ITextType;    
    /**System required to steer the engine */
    get SteeringSystem(): ITextType;
    /**Indicates the type of propeller */
    get PropellerType(): ITextType;
    /**General descriptive text used to describe the engine */
    get GeneralEngineDescription(): Iterable<ITextType>;
    /**Detailed descriptive text used to describe the engine. This field provides more detail than the GeneralEngineDescription field.*/
    get DetailedEngineDescription(): Iterable<ITextType>;
    /**Text description of the transmission */
    get DriveTransmissionDescription(): Iterable<ITextType>;
    /**Engine serial number */
    get EngineSerialString(): IStringType;
    /**Drive serial number */
    get DriveSerialString(): IStringType;
    /**The serial number of the transom shield kit */
    get TransomShieldKitSerialString(): IStringType;
    /**V-Drive serial number */
    get VDriveSerialString(): IStringType;
    /**The serial number of the Transmission */
    get TransmissionSerialString(): IStringType;
    /**Indicates the weight of the item when all fluids are empty */
    get DryWeightMeasure(): IWeightMeasureType;
    /**Indicates the weight of the item when all fluids are present */
    get WetWeightMeasure(): IWeightMeasureType;
    /**Length of the shaft on which the prop mounts */
    get ShaftLengthMeasure(): ILengthMeasureType;
    /**The mean effective pressure (MEP) is the average pressure exerted on the piston during each power stroke. */
    get EffectiveMeanPressureMeasure(): Iterable<IMeasurementType>;
    /**Defines the manufacturers rated output drive power of the engine. */
    get PowerMeasure(): Iterable<IMeasurementType>;
    /**Mean piston speed is the average speed of the piston in a reciprocating engine. */
    get MeanPistonSpeedMeasure(): Iterable<IMeasurementType>;
    /**Pressure in the cylinder when then engine is running at 240-300 rpm */
    get CompressionPressureMeasure(): IPressureMeasureType;
    /**Define the manufacturers rated torque output of the engine */
    get TorqueMeasure(): IMeasurementType;
    get GearRatioGroup(): Iterable<IGearRatioGroupType>;
    get EngineDimensions(): Iterable<IEngineDimensionsType>;
    /**Volume displaced by each piston moving from bottom dead center to top dead center */
    get DisplacementMeasure(): IDisplacementMeasureType;
    /**Voltage required to run an electric motor */
    get OperatingVoltageMeasure(): IElectricityMeasureType;
    /**A value that represents the ratio of the volume of its combustion chamber; from its largest capactiy to its smallest capacity */
    get CompressionRatioMeasure(): IMeasureType;
    /**Engines need to be identified with part identifier */
    get ItemID(): IIdentifierType;
    /**Engine manufacturer name */
    get ManufacturerName(): ITextType;
}

/**The Measurement components provides details about specific measurements of an item */
export interface IMeasurementType {
    /**Defines an amount of pressure */
    get PressureMeasure(): IPressureMeasureType;
    /**Defines a rate of speed */
    get SpeedMeasure(): ISpeedMeasureType;
    /**Defines a rate of electricity */
    get ElectricityMeasure(): IElectricityMeasureType;
    /**The amount of mechanical energy produced.  This can be the number of hourse power that is produced by an engine */
    get MechanicalEnergeMeasure(): IPowerMeasureType;
    /**Code identifying a physical location */
    get LocationID(): IIdentifierType;
    /**A name to identify the location */
    get LocationName(): Iterable<ITextType>;
}

/**The GearRatio component provides information about an engine's gears */
export interface IGearRatioGroupType {
    /**The ratio of the engine rotation to the out put drive rotation */
    get GearRatio(): ITextType;
    /**A description of the gear */
    get GearRatioDescription(): ITextType;
}

/**Physical size of the engine, this is usually consists of two nodes, one for length and one for width */
export interface IEngineDimensionsType {
    /**A description of the dimensions being described for an engin */
    get EngineDimensionDescription(): Iterable<ITextType>;
    /**Indicates the height of the engine */
    get EngineHeightMeasure(): ILengthMeasureType;
    /**Indicates the width of the engine */
    get EngineWidthMeasure(): ILengthMeasureType;
    /**Indicates the depth of the engine */
    get EngineDepthMeasure(): ILengthMeasureType;
}

/**A general term that refers to all of the mechanical parts of a car attached to a structural frame. 
 * In cars with unitized construction, the chassis comprises everything but the body of the car. */
export interface IChassisType {
    /**Make of chassis */
    get ChassisMake(): IRequired<ITextType>;
    /**Model of chassis */
    get ChassisModel(): ITextType;
    /**Unique identifier for the chassis */
    get ChassisSerialString(): IIdentifierType;
}

/**A large, often metallic container for holding or storing liquids or gases */
export interface ITankType {
    /**The purpose or usage of this tank */
    get TankUsageCode(): IRequired<ITankUsageCodeType>;
    /**The type of Material the tank is constructed from */
    get TankMaterialCode(): ITankMaterialCodeType;
    /**How much the tank can hold */
    get TankCapacityMeasure(): IVolumeMeasureType;
    /**The number of tanks */
    get TankCountNumeric(): INumericType;
    /**Precedence, advantage, or choice of one person or thing over another. */
    get UsagePreference(): IPreferenceABIEType;
    /**Unique identifier for the tank */
    get TankSerialString(): IIdentifierType;
}

/**The Dimensions component represents the dimensions of an item, area, etc. using various measurements including width, height, length, and diameter */
export interface IDimensionType {
    /**The value of the dimension that has been measured */
    get DimensionValueMeasure(): ILengthMeasureType;
    /**A code representing the type of dimension measure provided */
    get DimensionTypeCode(): ICodeType;
    /**A free-form text description of the dimension provided */
    get DimensionDescription(): ITextType;
    /**The measurement of the extent of something from side to side */
    get WidthMeasure(): ILengthMeasureType;
    /**The longest extent of anything as measured from end to end */
    get LengthMeasure(): ILengthMeasureType;
    /**The distance upward from a given level to a fixed point */
    get HeightMeasure(): ILengthMeasureType;
    /**The width of a circular or cylindrical object */
    get DiameterMeasure(): ILengthMeasureType;
}

/**The CertificationGroup component provides information about certifications issued for a specific item. */
export interface ICertificationGroupType {
    /**Name of issuer of certification */
    get CertificationIssuerName(): INameType;
    /**Certification Value */
    get CertificationValue(): ITextType;
    /**Date when the car completed the certification testing */
    get CertificationDate(): IDateType;
    /**Warranty applicable for the certified vehicle */
    get CertifiedWarrantyCode(): ITextType;
    /**Odometer reading when the vehicle was certified */
    get ActualOdomoter(): ILengthMeasureType;
    /**A code indicated how the vehicle was previously used.  Refer to the UseEnumeratedType code list */
    get VehiclePreviousUseCode(): IVehicleUseContentType; 
    /**Individual or company that owned the vehicle previously */
    get PreviousOwnerParty(): IPartyABIEType;
    /**A code indicating how the vehicle was previously used.  Refer to the VehicleUseEnumeratedType code */
    get ClassAndWarranty(): Iterable<ITextType>;
    /**A code indicating how the vehicle was previously used.  Refer to the VehicleUseEnumeratedType code list */
    get RepairOrderNumber(): Iterable<IStringType>;
}

/**The grouping of Vehicles that a Labor Operation ID correponds.
    Additionally, use this component(group) instead of the simple VehicleID element, if more than one VehicleID must be recorded for a given vehicle (e.g. construction equipment). */
export interface IVehicleIdentificationGroupType {
    /**The unique id for a grouping of vehicles */
    get VehicleGroupID(): Iterable<IIdentifierType>;
    /**The vehicle identification.  This could be the VIN, HIN, or some unique identifier for a vehicle */
    get IdentifierType(): Iterable<IIdentifierType>;
}

/**Component to communicate important dates and events for a vehicle */
export interface IVehicleHistoryDateGroupType {
    /**Date when an important event took place for the vehicle */
    get VehicleHistoryDate(): IRequired<IDateType>;
    /**Type code of the event that took place on the Vehicle */
    get VehicleHistoryTypeCode(): ICodeType;
    /**Description of the event that took place on VehicleHistoryDate */
    get VehicleHistoryTypeDescription(): ITextType;
}

/**Describes the various options and pricing for a particular item */
export interface IOptionABIEType {
    /**A unique identifier for a vehicle, boat, or other item's option */
    get OptionID(): IIdentifierType;
    /**The type supplied by an external code list that specifies a particular option. 
     * Source of the code list should be specified in the appropriate attributes for this field, and the option type specified in this field. 
     * This may be different than the OptionID which is a unique identifer for an option. */
    get OptionTypeCode(): ICodeType;
    /**Abbreviated description of the option */
    get OptionShortDescription(): Iterable<ITextType>;
    /**Name of vehicle option */
    get OptionName(): ITextType;
    /**Stock Number of Vehicle Option */
    get OptionStockNumberString(): IStringType;
    /**Item manufacturer name */
    get ManufacturerName(): INameType;
    /**Free form text related to option */
    get OptionNotes(): Iterable<ITextType>;
    /**Option pricing. */
    get OptionPricing(): Iterable<IPricingABIEType>;
    /**Indicates if the option has been activated */
    get OptionActiveIndicator(): IIndicatorType;
    /**A defined person or department that acts as a point of contact with another peson or department. */
    get DefinedContact(): IContactABIEType;
    /**Residual value of option */
    get OptionResidualValueAmount(): IAmountType;
}

export interface IPricingABIEType {
    /**Indaces the source of the price type of this price */
    get PriceSourceCode(): Iterable<ICodeType>;
    /**USed to express delta between two multiple price types */
    get PricingDeltaPercent(): IPercentType;
    /**This field indicates whether or not this price should be displayed */
    get PriceHideIndicator(): IIndicatorType
    /**A sum of money for which something is or may be bought or sold */
    get Price(): Iterable<IPriceABIEType>;
    /**It represents the date a price became effective */
    get PriceEffectiveDate(): IDateType;
}

/**A sum of money for which something is or may be bought or sold */
export interface IPriceABIEType {
    /**A code specifying the type of price */
    get PriceCode(): IPriceEnumeratedType;
    /**The monetary value of the price charged */
    get ChargeAmount(): IAmountType;
    /**A textual description of price */
    get PriceDescription(): Iterable<ITextType>;
    /**A location where a particular set of information applies. i.e. if found in the price component this specifies the location within a country that the price may apply. */
    get ApplicableLocation(): Iterable<ILocationABIEType>;
    /**Tax type relating to the price */
    get TaxType(): ITextType;
    /**A specific period of time such as the length of time between two known date/time points, from a start date onwards, or up to an end date of when something is effective. */
    get EffectivePeriod(): IPeriodABIEType;
}

/**A physical location or place */
export interface ILocationABIEType {
    /**Code identifying a physical location */
    get LocationID(): IIdentifierType;
    /**A name to identify the location */
    get LocationName(): Iterable<ITextType>;
    /**A free-form text description of a physical location */
    get LocationDescription(): Iterable<ITextType>;
    /**An identifier for the District an organization resides */
    get DistrictID(): IIdentifierType;
    /**Type of location */
    get LocationTypeCode(): ILocationTypeCodeType;
    /**A name, expressed as text, of the country */
    get CountryName(): Iterable<ITextType>;
    /**A unique country identifer */
    get CountryID(): ICountryCodeType;
    /**A name, expressed as text, of the sub-division of a country */
    get CountrySubDivisionName(): Iterable<ITextType>;
}

/**The business information common to all product items */
export interface IPartsProductItemType {
    /**Deprecated: Use ItemIdentificationGroup */
    get ItemID(): IDeprecated<IIdentifierType>;
    /**The name of a Part or Product Item as text */
    get PartName(): Iterable<ITextType>;
    /**The description of a part or product item as text */
    get PartItemDescription(): Iterable<ITextType>;
    /**Specifies whether the parts are indicated by manufacturer part code or part number - H = Manufacturer Part Code, P = Part Number */
    get PartTypeCode(): IPartTypeEnumeratedType;
    /**Gifts, literature, keys, regular parts inventory class used in DMS system */
    get PartClassCode(): ICodeType;
    /**Identifies the part manufacturer */
    get PartManufacturer(): ITextType;
    /**Identifies class of part */
    get ClassCode(): ICodeType;
    /**Indicates that governmental regulations consider this part as hazardous material */
    get HazmatIndicator(): IIndicatorType;
    /**Gives information about type of hazardous material.  This information is used for transportation and storage restriction */
    get HazardousMaterialDescription(): ITextType;
    /**The category a part number is associated with */
    get ItemIDCategoryTypeCode(): IItemIDCategoryTypeCodeType;
    /**Deprecated: Use ItemIdentificationGroup */
    get AlternateItemIDs(): IDeprecated<Iterable<IAlternateItemIDsType>>;
    /**A group of identifications that uniquely identifies this document */
    get ItemIdentificationGroup(): IItemIdentificationGroupType;
    /**A number, usually one of a series, assigned for identification.  This is not the Item ID */
    get SerialNumberID(): IIdentifierType;
    /**Indicates whether or not a serial number is required for a particular item */
    get SerialNumberIDRequiredIndicator(): IIndicatorType;
    /**Allows the retailer to know the quantity contained in the package */
    get PackageQuantity(): IQuantityType;
    /**Method of purchase normally used to acquire this item */
    get AcquisitionMethodTypeCode(): IAcquisitionMethodTypeCodeType; //sqdt
    /**Used by DMS providers for internal cross referencing between multiple vendor lines */
    get VendorCode(): ICodeType;
    /**Code issued by item manufacturer that indicates the rules and pricing used when selling direct to retailers instead of through OEMs */
    get ProgramCode(): ICodeType;
    /**The condition of a part */
    get PartConditionCode(): IPartConditionCodeType;
    /**Units of measure */
    get UOMCode(): IUOMEnumeratedType;
    /**Vehicle Maintenance Reporting Standards code */
    get VMRSCode(): ICodeType;
    /**Indicates level of stocking maintained by OEM for this part.  This pertains not only to the replenishment algorithm, but the number of stocking locations */
    get StockingLevelIndicatorCode(): IStockingLevelIndicatorCodeType;
    /**This component allows for the free form entry of notes and text descriptions. Detailed data should use one of the existing fields or submit a modification request back to STAR to capture the appropriate data. */
    get FreeFormTextGroup(): IFreeFormTextGroupType;
    /**An indicator to flag whether or not the part may be returned */
    get EligibleForReturnIndicator(): IIndicatorType;
    /**Communicates the current supply status of the part providing better visibility on the availability and lead time for procurement */
    get PartSupplyStatusCode(): ICodeType;
    /**Text Description of the core part */
    get CorePartDescription(): ITextType;
    /**Description of a remanufactured part */
    get ManufacturedPartDescription(): ITextType;
    /**Patent pending description of a part */
    get PatentPendingDescription(): ITextType;
    /**Service File description */
    get ServiceFileDescription(): ITextType;
    /**Part sales restrictions */
    get PartDealerSalesRestriction(): IPartSalesRestrictionCodeEnumeratedType;
    /**Ordering restrictions */
    get PartOrderRestriction(): IPartOrderingRestrictionCodeEnumeratedType;
    /**Source code for the part */
    get PartSourceCode(): ICodeType;
    /**Description of the source code */
    get PartSourceDescription(): ITextType;
    /**The vehicle's major assemblies. */
    get VehicleMajorPartsProductItem(): Iterable<IPartsProductItemType>;
    /**To be able to communicate prices on attachments */
    get VehicleMajorPartsProductItemPricing(): IPricingABIEType;
    /**Specific configuration available for a limited time period. */
    get VehicleMajorPartsProductItemConfiguration(): Iterable<IVehicleMajorPartsProductItemConfigurationType>;
}

/**The AlternateItemIDs component is used to provide alternate IDs for an item such as OEM part number, ACDELCO part number, UPC */
export interface IAlternateItemIDsType {
    /**The identifier of an item */
    get ItemID(): IRequired<IIdentifierType>
    /**The category a part number is associated with */
    get ItemIDCategoryTypeCode(): IItemIDCategoryTypeCodeType; //sqdt
}

/**A list of identifications for an item.  Multiple item identifications can be identified using the ItemIdentificationGroup e.g., Order's ItemID, Fulfiller's ItemID, 3rd Party Fulfiller. ItemID */
export interface IItemIdentificationGroupType {
    /**An identifer for an item. */
    get ItemIdentification(): Iterable<IItemIdentificationType>;
}

/**An identifier for an item */
export interface IItemIdentificationType {
    /**The identifier of an item */
    get ItemID(): IRequired<IIdentifierType>;
    /**The agency role that defined the item.  An example of an agency may be a manufacturer, a retail system provider, etc.  
     * This list doe snot contain specific entity names, only roles.  
     * Use of the schemeAgencyName should be used to identify the agency defining the Role.  
     * Roles are defined in the enumeration */
    get AgencyRoleCode(): IAgencyRoleCodeType; //sqdt
}

/**The FreeFormTextGroupType component is used for providing free form text Notes and text Descriptions */
export interface IFreeFormTextGroupType {
    /**Free-form text field describing a note */
    get Note(): Iterable<ITextType>;
    get Description(): Iterable<ITextType>;
}

/**Specific configuration available for a limited time period */
export interface IVehicleMajorPartsProductItemConfigurationType {
    /**Configuration code */
    get Code(): ICodeType;
    /**Configuration code description */
    get Description(): ITextType;
    /**Time period this configuration is available */
    get EffectivePeriod(): IPeriodABIEType;
}

/**Too communicate telematics status and subscription information */
export interface ITelematicsSubscriptionType {
    /**List of status of subscription */
    get StatusList(): Iterable<IStatusListType>;
    /**To communicate the list of subscriptions. */
    get SubscriptionList(): Iterable<ISubscriptionListType>;
}

/**List of status of subscription */
export interface IStatusListType {
    /**Status type.  Possible values are WiFi, 4G Cellular, Phone App for remote start */
    get StatusType(): ITextType;
    /**Status Description */
    get StatusDescription(): ITextType;
}

/**To communicate the list of subscriptions */
export interface ISubscriptionListType {
    /**Subscription start date */
    get SubscriptionStartDate(): IDateType;
    /**Subscription end date */
    get SubscriptionEndDate(): IDateType;
    /**Subscription term and conditions */
    get SubscriptionTerms(): ITextType;
    /**Product Type.  Possible values are (brand) Traffic, (brand) Concierge */
    get ProductPackageType(): ITextType;
    /**Product description */
    get ProductPackageDescription(): ITextType;
    /**Status of the subscription */
    get SubscriptionServiceStatus(): ITextType;
}

export interface IBrandedInfoType {
    /**This tag indicates if a vehicle's title has been branded */
    get BrandedTitleIndicator(): IIndicatorType;
    /**Branding Date */
    get BrandedTitleDate(): IDateType;
    /**Branding State Code */
    get BrandingStateCodeString(): IStringType;
    /**Branding state reference number */
    get BrandingStateReferenceString(): IStringType;
    /**Branding source */
    get BrandingSource(): ITextType;
    /**A title identification number */
    get TitleID(): IIdentifierType;
    /**A description of the branding */
    get BrandingDescription(): Iterable<ITextType>;
}

export interface ITaxType {
    /**Identifies the tax type */
    get TaxTypeCode(): TaxTypeEnumeratedType;
    /**Free form text description of tax amount */
    get TaxDescription(): Iterable<ITextType>;
    /**Actual amount of tax paid */
    get TaxAmount(): IAmountType;
    /**Unit amount of sales tax */
    get UnitSalesTaxAmount(): IAmountType;
    /**Tax Percentage Rate */
    get TaxRatePercent(): IPercentType;
    /**Total taxable price */
    get TotalTaxableAmount(): IAmountType;
    /**Total non-taxable price */
    get NonTaxableAmount(): IAmountType;
    /**Tax type identification */
    get TaxTypeIdCode(): ITaxTypeIdEnumeratedType;
    /**Determines whether the dealer wants to claim tax on the cost */
    get TaxabilityIndicator(): IIndicatorType;
    /**Indicates whether the tax is capitalized, meaning whether it is included in the monthly payments.  If the tax is not capitalized it is to be paid up front */
    get CapitalizedTaxIndicator(): IIndicatorType;
    /**The name of the organization or jurisdiction the tax is paid to */
    get TaxPaidToName(): INameType;
    /**USed to indicate if the Tax has been paid or is not applicable */
    get TaxStatusCode(): ITaxStatusCodeType;
    /**Tax Exempt flag.  Is this sale tax exempt from taxes? */
    get TaxExemptIndicator(): IIndicatorType;
    /**Tax Exempt ID number of the purchaser */
    get TaxExemptID(): ITextType;
}

/**Fleet account information associated with a vehicle */
export interface IFleetAccountType {
    /**Manufacturer defined fleet account number */
    get FleetAccountString(): IStringType;
    /**Uniquely identifies the vehicle as part of a fleet company */
    get FleetVehicleID(): IIdentifierType;
    /**Fleet purchase order number vehicle was purchased under */
    get FleetPurchaseOrderNumberString(): IStringType;
    /**Vehicle available to fleet indicator */
    get FleetAvailableIndicator(): IIndicatorType;
    /**Indicates that this vehicle only available to fleet */
    get FleetOnlyIndicator(): IIndicatorType;
    /**Identifies to which fleet this vehicle belongs.  This number is assigned based on state licensing and registration of the vehicle */
    get RegistrationFleetID(): IIdentifierType;
    /**Describes the contents of the FleetAccountString */
    get FleetAccountCode(): IFleetAccountCodeType; 
    /**This component keeps track of the number of vehicles, make, and vehicle class that are currently on the Fleet Account. */
    get FleetQuantity(): Iterable<IFleetQuantityType>;
}

/**This component keeps track of the number of vehicles, make, and vehicle class that are currently on the Fleet Account */
export interface IFleetQuantityType {
    /**This value represents the number of vehicles */
    get FleetCountNumeric(): IRequired<INumericType>;
    /**Deprecated: Use VehicleMake */
    get MakeString(): IDeprecated<IStringType>;
    /**Class of vehicle */
    get VehicleClassCode(): VehicleClassEnumeratedType;
}

export interface IServiceCampaignType {
    /**Manufacturer assigned campaign number */
    get CampaignNumberString(): IStringType;
    /**Manufacturer assigned Campaign Option Code */
    get CampaignOptionCode(): ICodeType;
    /**A campaign related field specifying the reimbursement code for a campaign service.  Reimbursement codes denote the mix of part and labor operations the dealer used to perform the service */
    get CampaignReimbursementCode(): ICodeType;
    /**Service Campaign Description */
    get CampaignDescription(): ITextType;
    /**A campaign related field specifying the disposition of a campaign */
    get CampaignDispositionCode(): ICodeType;
    /**Denotes whether claim is actual campaign service or additional service, but still related to the campaign */
    get SupplementalCampaignIndicator(): IIndicatorType;
    /**Free form comments related to campaign */
    get CampaignNotes(): ITextType;
    /**The type of campaign code. */
    get CampaignTypeCode(): ICodeType;
    /**A date related to the Campaign Type code */
    get CampaignDate(): IDateType;
    /**A campaign group code */
    get CampaignGroupCode(): ICodeType;
    /**A campaign sub group code */
    get CampaignSubGroupCode(): ICodeType;
    /**The date the campaign will expire */
    get CampaignExpirationDate(): IDateType;
    /**Description of the Campaign Type code */
    get CampaignTypeDescription(): ITextType;
    /**The original campaign number of this recall */
    get OriginalCampaignNumber(): ITextType;
}

export interface IImageAttachmentExtendedType extends IImageAttachmentType {
    /**Image attachment title */
    get ImageAttachmentTitle(): ITextType;
    /**Holder for embedded data.  (Will have an attribute for type of embedded document) */
    get EmbeddedData(): Iterable<IEmbeddedDataType>;
    /**Size of image file */
    get ImageFileSizeMeasure(): IComputerStorageMeasureType;
    /**The date and time the image was last modified */
    get ImageLastModifiedDateTime(): IDateTimeType;
    /**Free-form text description of the image.  This field is used to provide a more detailed description than the ImageTitle. */
    get ImageDescription(): Iterable<ITextType>;
    /**Indicates the perspective from which the photo was taken */
    get ImagePerspectiveCode(): ImagePerspectiveEnumeratedType;
    /**Indicates the usage preference */
    get UsagePreference(): IPreferenceABIEType;
    /**Used to provide additional information that helps describe the image.  Can be used to add additional notes about the image and information beyond a general description */
    get FreeFormTextGroup(): IFreeFormTextGroupType;
}

export interface IImageAttachmentType {
    /**A unique identifier for this image.  Can be used to help uniquely identify multiple images of different sizes and types */
    get ID(): IIdentifierType;
    /**URI */
    get URI(): IURIType;
    /**Image tag width */
    get ImageWidthMeasure(): ILengthMeasureType;
    /**Image tag height */
    get ImageHeightMeasure(): ILengthMeasureType;
    /**Image alternate text */
    get ImageAlternateText(): Iterable<ITextType>;
}

export interface IEmbeddedDataType {
    /**Container to carry the embedded data */
    get DataString(): IStringType;
}

export interface IIncentiveABIEType {
    /**Incentive element can have multiple occurrences.  Unique incentive identifier */
    get IncentiveID(): IRequired<IIdentifierType>;
    /**Type of incentive */
    get IncentiveSourceType(): IRequired<ITextType>;
    /**Type of dealer incentive */
    get IncentiveType(): IRequired<ITextType>;
    /**Dealer Incentive Name */
    get IncentiveName(): IRequired<ITextType>;
    /**Dealer Incentive Description */
    get IncentiveDescription(): ITextType;
    /**Dealer Incentive Disclosure */
    get IncentiveDisclosure(): IIncentiveDisclosureABIEType;
    /**Flag indicating conditional offer */
    get IncentiveConditionalFlag(): IRequired<ITextType>;
    /**Dealer internal note */
    get IncentiveNote(): ITextType;
    /**Monetary Incentive Amount */
    get IncentiveAmount(): IAmountType;
    /**Finance incentive percentage */
    get IncentiveFinancePercentage(): IPercentType;
    /**Finance/Lease incentive term */
    get IncentiveTerm(): INumericType;
    /**Lease incentive downpayment */
    get IncentiveDownPayment(): IAmountType;
    /**Lease incentive number of miles per year */
    get IncentiveMiles(): INumericType;
    /**Incentive Incremental Reduction */
    get IncentiveIncrementalRedution(): Iterable<IIncentiveIncrementalReductionABIEType>;
    /**A specific period of time such as the length of time between two known date/time points, from a start date onwards, or up to an end date of when something is effective. */
    get IncentiveEffectivePeriod(): IRequired<IIncentiveEffectivePeriodABIEType>;
    /**Incentive start date */
    get LastUpdated(): IRequired<IDateTimeType>;
}

export interface IIncentiveDisclosureABIEType {
    /**Type of dealer incentive disclosure */
    get DisclosureType(): ITextType;
    /**Dealer incentive disclosure title */
    get DisclosureTitle(): ITextType;
    /**Dealer Incentive Disclosure */
    get DisclosureText(): ITextType;
}

export interface IIncentiveIncrementalReductionABIEType {
    /**Incentives incremental reductions time type */
    get ReductionTimeType(): ITextType;
    /**Incentives incremental reductions type */
    get ReductionType(): ITextType;
    /**Incentives incremental reductions amount */
    get ReductionAmount(): IAmountType;
    /**Incentives incremental reductions amount */
    get ReductionPercent(): IPercentType;
    /**Incentives reduction start date */
    get StartDate(): IDateType;
    /**Days on lot when incentives reduction starts */
    get DaysOnLot(): INumericType;
}

export interface IIncentiveEffectivePeriodABIEType {
    /**Incentive start date */
    get StartDate(): IDateType;
    /**Incentive end date */
    get EndDate(): IDateType;
}

//#endregion

//#region oacl
export interface ISystemEnvironmentCodeContentType {
}
//#endregion

//#region oagis
export interface IVerbType {
}
export interface IResponseCriteria {
}
export interface IPositiveIntegerNumericType {
}
export interface ISignature {
}
//#endregion



//#region sqdt
export interface ILengthMeasureType {
}
export interface IComputerStorageMeasureType {
}
export interface IFleetAccountCodeType {
}
export interface ITaxStatusCodeType {
}
export interface IAgencyRoleCodeType {
}
export interface IItemIDCategoryTypeCodeType {
}
export interface IQuantityType {
}
export interface IPartConditionCodeType {
}
export interface IAcquisitionMethodTypeCodeType {
}
export interface IStockingLevelIndicatorCodeType {
}
export interface ILocationTypeCodeType {
}
export interface ICountryCodeType {
}
export interface ITankUsageCodeType {
}
export interface ITankMaterialCodeType {
}
export interface IVolumeMeasureType {
}
export interface IPressureMeasureType {
}
export interface ISpeedMeasureType {
}
export interface IElectricityMeasureType {
}
export interface IPowerMeasureType {
}
export interface IYearDateType {
}
export interface IFuelTypeCodeType {
}
export interface IForceMeasureType {
}
export interface IBoatEngineLocationCodeType {
}
export interface IFuelConsumptionMeasureType {
}
export interface IWeightMeasureType {
}
export interface IDisplacementMeasureType {
}
export interface IEventTypeCodeType {
}
export interface ITimeMeasureType {
}
export interface IContactMethodTypeCodeType {
}
export interface ILanguageCodeType {
}
export interface IDayOfWeekCodeType {
}
export interface IAssigningOrganizationPartyIdType {
}
//#endregion

//#region qdt
export interface IStringType {
}
export interface IURIType {
}
export interface INormalizedStringType {
}
//#endregion

//#region udt
export interface IDateType {
}
export interface ITextType {
}
export interface IAmountType {
}
export interface IPercentType {
}
export interface INumericType {
}
export interface IIdentifierType {
}
export interface IDateTimeType {
}
export interface ICodeType {
}
export interface IIndicatorType {
}
export interface INameType {
}
export interface IMeasureType {
}
export interface IString {
}
//#endregion