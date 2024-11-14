//#region scl

export enum ImagePerspectiveEnumeratedType {
    /**Image taken from the interior of an item or location */
    Interior = 'Interior',
    /**Image taken from the exterior of an item or location */
    Exterior = 'Exterior',
    /**Image taken from a perspective other than interior or exterior */
    Other = 'Other'
}

/**Class of vehicle */
export enum VehicleClassEnumeratedType {
    /**Passenger */
    Passenger = 'passenger',
    /**Minivan */
    Minivan = 'minivan',
    /**Pickup */
    Pickup = 'pickup',
    /**Full size van */
    FullSizeVan = 'fullsizevan',
    /**Sport Utility Vehicle */
    SportUtilityVehicle = 'sportutil',
    /**Motorcycle */
    Motorcycle = 'motorcycle',
    /**Recreational Vehicle */
    RV = 'rv',
    /**All Terain Vehicle */
    ATV = 'atv',
    /**Boats */
    Boats = 'boats',
    /**Snowmobile */
    Snowmobile = 'snowmobile',
    /**Heavy Truck */
    HeavyTruck = 'heavy truck',
    /**Medium duty */
    MediumDuty = 'medium duty',
    /**Truck */
    Truck = 'truck',
    /**Sedans */
    Sedans = 'sedans',
    /**Other */
    Other = 'other',
    /**Not Applicable */
    NA = 'N/A',
    /**Watercraft */
    Watercraft = 'watercraft',
    /**Outboard Engine */
    OutboardEngine = 'outboardengine',
    /**Side by Side */
    SideBySide = 'sidebyside'
}

/**Tax Type */
export enum TaxTypeEnumeratedType {
    Total = 'Total',
    Amount = 'Amount',
    Labor = 'Labor',
    Parts = 'Parts',
    Claim = 'Claim',
    Dealer = 'Dealer',
    Deductible = 'Deductible',
    Prorated = 'Prorated',
    Other = 'Other',
    Luxury = 'Luxury',
    VehicleInventory = 'Vehicle Inventory',
    TaxesNotInCashPrice = 'Taxes Not In Cash Price',
    DocumentStamp = 'Document Stamp',
    Sales = 'Sales',
    Tire = 'Tire',
    PersonalProperty = 'Personal Property',
    Registration = 'Registration',
    MonthlyUse = 'Monthly/Use',
    Weight = 'Weight',
    Adjustment = 'Adjustment',
    DownPayment = 'DownPayment',
    CapCostReduction = 'CapCostReduction',
    Lieu = 'Lieu',
    CurrentYear = 'CurrentYear',
    NA = 'N/A',
    /**Tennessee Tax - combination of city and county */
    LocalOption = 'LocalOption',
    /**Tennessee Tax - State Tax */
    SingleArticle = 'SingleArticle',
    /**Gas tax levied to applicable vehicles or by state/province law */
    Gas = 'Gas',
    /**The total amount of monthly use tax for a payment on a contract */
    TotalMonthlyUse = 'Total Monthly/Use',
    /**Tax charged on service contracts */
    ServiceContract = 'Service Contract',
    /**Adjusted sales tax due to tax modifications when capitalized */
    AdjustedSales = 'Adjusted Sales',
    /**The total amount of sales/use tax for a single payment contract */
    TotalSalesUse = 'Total Sales/Use',
    /**Provincal tax providing for the installation or removal of freon */
    AirConditionExcise = 'Air Conditioning Excise',
    /**A type of tax that is assessed upon "tax free" tangible personal property purchased by a resident of the assessing state for use, storage or consumption of goods in that state (not for resale), regardless of where the purchase took place.  The tax is a one time retail tax due at registration or titling of a vehicle */
    PurchaseAndUse = 'Purchase and Use',
    /**A county tax charged based on the location of the dealer and the customer */
    CountyTax = 'County Tax',
    /**This is a general excise tax that a state or region could impose */
    GeneralExcise = 'General Excise',
    /**A gross receipts tax, sometimes referred to as a gross excise tax, is a tax on the total gross revenues of a company, regardless of their source */
    GrossReceipt = 'Gross Receipt',
    /**Tax due on a Trade-In vehicle */
    TaxOnTradeIn = 'Tax on Trade-In',
    /**Total tax due on fees paid upfront */
    TaxOnUpfrontFees = 'Tax on Upfront Fees',
    /**Tax due on amount of acquisition fee */
    TaxOnAcquisitionFee = 'Tax on Acquisition Fee',
    /**A tax that the seller of record must pay to a governmental body and will pass the tax on to its customers */
    MunicipalHazardAndSpecialWaste = 'Muncipal Hazard and Special Waste',
    /**Environmental Levy/Tax */
    EnvironmentalTax = 'Environmental Tax',
    /**Tax paid at registration based on the vehicle's age and MSRP */
    MotorVehicleTax = 'Motor Vehicle Tax',
    /**A tax levied by cities and villages to be credited to a road fund of the city or village */
    WheelTax = 'Wheel Tax',
    GOGTax = 'GOG Tax',
    MiscMaterialsTax = 'Misc Materials Tax',
    PaintMaterialsTax = 'Paint Materials Tax',
    ShopSuppliesTax = 'Shop Supplies Tax',
    FreightTax = 'Freight Tax'
}

export interface ITaxTypeIdEnumeratedType {
}
export interface IPartTypeEnumeratedType {
}
export interface IUOMEnumeratedType {
}
export interface IPartSalesRestrictionCodeEnumeratedType {
}
export interface IPartOrderingRestrictionCodeEnumeratedType {
}
export interface IPriceEnumeratedType {
}
export interface IVehicleUseContentType {
}
export interface ISaleClassEnumeratedType {
}
export interface IBoatEngineTypeEnumeratedType {
}
export interface ICylinderConfigurationEnumeratedType {
}
export interface IStartingSystemTypeEnumeratedType {
}
export interface IColorItemEnumeratedType {
}
export interface ITransmissionTypeEnumeratedType {
}
export interface IDriveTypeEnumeratedType {
}
export interface IMaritalStatusEnumeratedType {
}
export interface IGenderEnumeratedType {
}
export interface ITransactionTypeCodeEnumeratedType {
}
export interface ICountryEnumeratedType {
}
export interface IConfirmationEnumeratedType {
}
export interface ILanguageEnumeratedType {
}
//#endregion