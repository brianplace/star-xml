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

export enum TaxTypeIdEnumeratedType {
    City = 'CS',
    County = 'CP',
    State = 'ST',
    Other = 'OT',
    Excise = 'EX',
    ValueAdded = 'VAT',
    ProvincialSalesTax = 'PST',
    Rental = 'RT',
    GoodsAndServicesTax = 'GST',
    HarmonizedTax = 'HST',
    AirTax = 'ART',
    QuebecSalesTax = 'QST',
    ImportTax = 'IMP'
}

/**Specifies whether the parts are indicated by manufacturer part code or Part Number */
export enum PartTypeEnumeratedType {
    ManufacturerPartCode = 'H',
    PartNumber = 'P'
}

/**Units of Measure */
export enum UOMEnumeratedType {
    Each = 'ea',
    Box = 'bx',
    Case = 'case',
    Carton = 'ctn',
    Gallon = 'gal',
    Quart = 'qt',
    Pint = 'pt',
    Foot = 'ft',
    Yard = 'yd',
    Inch = 'in',
    Liter = 'L',
    Meter = 'm',
    Centimeter = 'cm',
    Kilogram = 'kg',
    Gram = 'g',
    Other = 'other',
    Ton = 'tn',
    Kilometers = 'km',
    Miles = 'mi',
    Horsepower = 'hp',
    Kilowatt = 'kw',
    Pound = 'pound',
    Pack = 'pk',
    Pair = 'pr',
    Roll = 'rl',
    Bottle = 'bt',
    Crate = 'cs',
    Hour = 'h',
    Set = 'set',
    Canister = 'can',
    Piece = 'pc',
    Tube = 'tb'
}

/**Identifies if the sale of a part is restricted */
export enum PartSalesRestrictionCodeEnumeratedType {
    OKToSellThePart = '0',
    RestrictedDistribution = '1',
    NotForSale = '2'
}

/**Identifies if the ordering of a part is restricted */
export enum PartOrderingRestrictionCodeEnumeratedType {
    NoRestrictions = '0',
    Obsolete = '3',
    NonUSAPart = '4',
    OutOfProduction = '5',
    NoLongerProcured = '6',
    NotYetAdopted = '7'
}

export enum PriceEnumeratedType {
    /**Amount lenders typically loan on the listed vehicle */
    Loan = 'Loan',
    /**Amount typically sold for to a retail customer */
    Retail = 'Retail',
    /**Amount allowed by dealers on a trade */
    TradeIn = 'Trade-In',
    /**This is the advertised price of the item */
    List = 'List',
    /**This is the price at which the item actually sold */
    Sold = 'Sold',
    /**The vehicle invoice amount minus the dealer's holdback amount which is the amount that is paid to the dealer on a vehicle basis refunding the dealer for inflated vehicle invoice amounts */
    ActualWholesalePrice = 'Actual Wholesale Price',
    /**Discount off the original retail price by the Dealer */
    DealerDiscountAmount = 'Dear Discount Amount',
    /**Discount off the original retail price by the OEM */
    OEMDiscountAmount = 'OEM Discount Amount',
    /**The value of a used part if returned to the OEM for refurbishing */
    CorePriceAmount = 'Core Price Amount',
    /**Fleet price for a national account */
    NationalFleetPrice = 'National Fleet Price',
    /**Fleet price for a major fleet account */
    MajorFleetPrice = 'Major Fleet Price',
    /**Fleet price */
    FleetPrice = 'Fleet Price',
    /**The quantity of an item times the sold price less all discounts plus all additions for an item */
    ExtendedAmount = 'Extended Amount',
    /**Total core value */
    ExtendedCoreAmount = 'Extended Core Amount',
    /**Selling price suggested by the sender */
    SuggestedRetailPrice = 'Suggested Retail Price',
    /**The gross amount of all discounts applied to an item */
    GrossDiscountAmount = 'Gross Discount Amount',
    /**The difference between the Extended Amount and the Gross Discount Amount to be paid for an item */
    PartsInvoiceItemNetAmount = 'Parts Invoice Item Net Amount',
    /**Total of all itemized products of the Manufactured Suggested Retail Price */
    TotalOptionMSRP = 'Total Option MSRP',
    /**Price of single unit */
    UnitPrice = 'Unit Price',
    /**The submitted price is the dealer's whie the Retail price is the OEM's.  The OEM will classify the dealer's submitted retail price as the submitted price */
    SubmittedPrice = 'Submitted Price',
    /**A specially contracted fleet */
    SelectFleet = 'Select Fleet',
    /**The total amount a dealer spends on Vehicle preparation for Mechanical Reconditioning */
    ReconditioningCost = 'Reconditioning Cost',
    /**Sum of all Vehicle Cost of sales */
    TotalVehicleCost = 'Total Vehicle Cost',
    /**The amount spent by dealer as a certification fee */
    CertificationFee = 'Certification Fee',
    /**The appraisal/actual cash value paid by the dealer during trade-in or at the time of auction */
    ActualCashValue = 'Actual Cash Value',
    /**MSRP for the vehicle with no options */
    BaseMSRP = 'Base MSRP',
    /**MSRP for a vehicle with standard options */
    StandardMSRP = 'Standard MSRP',
    /**MSRP for vehicle with all options */
    HighMSRP = 'High MSRP',
    Job = 'Job',
    Labor = 'Labor',
    Parts = 'Parts',
    Sublet = 'Sublet',
    Miscellaneous = 'Miscellaneous',
    GasOilGrease = 'GasOilGrease',
    PaintMaterials = 'PaintMaterials',
    ShopSupplies = 'ShopSupplies',
    Freight = 'Freight',
    Claim = 'Claim',
    SubletLabor = 'SubletLabor',
    SubletParts = 'SubletParts',
    ReturnCore = 'ReturnCore',
    Customer = 'Customer',
    Internal = 'Internal',
    RentLoaner = 'RentLoaner',
    Return = 'Return',
    Splits = 'Splits',
    Total = 'Total',
    PreparationPrice = 'Prepping',
    /**Additional cost dealer adds above initial cost that is not included in commission */
    PackAmount = 'PackAmount',
    /**Amount that the OEM retains, and is provided to the dealer after the sale */
    HoldBackAmount = 'HoldBackAmount',
    PartCost = 'PartCost',
    CampaignPrice = 'CampaignPrice',
    LowestAcceptablePrice = 'LowestAcceptablePrice',
    InternetPrice = 'InternetPrice',
    OtherDiscountAmount = 'OtherDiscountAmount',
    OtherSurchargeAmount = 'OtherSurchargeAmount',
    SubtotalIncludingDiscount = 'SubtotalIncludingDiscount',
    TotalAmountExcludingTax = 'TotalAmountExcludingTax',
    TotalTaxAmount = 'TotalTaxAmount',
    TotalAmountIncludingTax = 'TotalAmountIncludingTax',
    /**Estimated Amount for Repairs */
    EstimatedAmount = 'EstimatedAmount',
    /**Estimated Amount for Additional Work Requested by the Customer */
    AdditionalWorkRequestEstimatedAmount = 'AdditionalWorkRequestEstimatedAmount',
    /**A generic cost */
    Cost = 'Cost',
    TotalTradesActualCashValue = 'Total Trades Actual Cash Value',
    TotalTradesPayoffAmount = 'Total Trades Payoff Amount',
    TotalAccessories = 'Total Accessories',
    TotalGrossProfit = 'Total Gross Profit',
    FrontendGrossProfit = 'Frontend Gross Profit',
    BackendGrossProfit = 'Backend Gross Profit',
    BalloonPayment = 'Balloon Payment',
    TotalTermDepreciation = 'Total Term Depreciation',
    TotalDriveOffAmount = 'Total Drive Off Amount',
    NetCost = 'Net Cost',
    NetListPrice = 'Net List Price',
    NetPrice = 'Net Price',
    NetCoreCost = 'Net Core Cost',
    NetCorePrice = 'Net Core Price',
    NetTotal = 'Net Total',
    TotalCost = 'Total Cost',
    TotalListPrice = 'Total List Price',
    TotalPrice = 'Total Price',
    TotalCoreCost = 'Total Core Cost',
    TotalCorePrice = 'Total Core Price',
    TotalTax = 'Total Tax',
    TotalMiscellaneous = 'Total Miscellaneous',
    TotalFreight = 'Total Freight',
    TotalRestock = 'Total Restock',
    TotalNet = 'Total Net',
    TotalInvoice = 'Total Invoice',
    TotalCustomerPartsPrice = 'Total Customer Parts Price',
    TotalCustomerLaborPrice = 'Total Customer Labor Price',
    TotalCustomerMiscellaneousPrice = 'Total Customer Miscellaneous Price',
    TotalCustomerGOGPrice = 'Total Customer GOG Price',
    TotalCustomerSubletPrice = 'Total Customer Sublet Price',
    TotalCustomerRepairOrderPrice = 'Total Customer Repair Order Price',
    TotalCustomerPartsCost = 'Total Customer Parts Cost',
    TotalCustomerLaborCost = 'Total Customer Labor Cost',
    TotalCustomerMiscellaneousCost = 'Total Customer Miscellaneous Cost',
    TotalCustomerGOGCost = 'Total Customer GOG Cost',
    TotalCustomerSubletCost = 'Total Customer Sublet Cost',
    TotalCustomerRepairOrderCost = 'Total Customer Repair Order Cost',
    TotalWarrantyPartsPrice = 'Total Warranty Parts Price',
    TotalWarrantyLaborPrice = 'Total Warranty Labor Price',
    TotalWarrantyMiscellaneousPrice = 'Total Warranty Miscellaneous Price',
    TotalWarrantyGOGPrice = 'Total Warranty GOG Price',
    TotalWarrantySubletPrice = 'Total Warranty Sublet Price',
    TotalWarrantyRepairOrderPrice = 'Total Warranty Repair Order Price',
    TotalWarrantyPartsCost = 'Total Warranty Parts Cost',
    TotalWarrantyLaborCost = 'Total Warranty Labor Cost',
    TotalWarrantyMiscellaneousCost = 'Total Warranty Miscellaneous Cost',
    TotalWarrantyGOGCost = 'Total Warranty GOG Cost',
    TotalWarrantySubletCost = 'Total Warranty Sublet Cost',
    TotalWarrantyRepairOrderCost = 'Total Warranty Repair Order Cost',
    TotalInternalPartsPrice = 'Total Internal Parts Price',
    TotalInternalLaborPrice = 'Total Internal Labor Price',
    TotalInternalMiscellaneousPrice = 'Total Internal Miscellaneous Price',
    TotalInternalGOGPrice = 'Total Internal GOG Price',
    TotalInternalSubletPrice = 'Total Internal Sublet Price',
    TotalInternalRepairOrderPrice = 'Total Internal Repair Order Price',
    TotalInternalPartsCost = 'Total Internal Parts Cost',
    TotalInternalLaborCost = 'Total Internal Labor Cost',
    TotalInternalMiscellaneousCost = 'Total Internal Miscellaneous Cost',
    TotalInternalGOGCost = 'Total Internal GOG Cost',
    TotalInternalSubletCost = 'Total Internal Sublet Cost',
    TotalInternalRepairOrderCost = 'Total Internal Repair Order Cost',
    TotalRepairOrderPartsPrice = 'Total Repair Order Parts Price',
    TotalRepairOrderLaborPrice = 'Total Repair Order Labor Price',
    TotalRepairOrderMiscellaneousPrice = 'Total Repair Order Miscellaneous Price',
    TotalRepairOrderGOGPrice = 'Total Repair Order GOG Price',
    TotalRepairOrderSubletPrice = 'Total Repair Order Sublet Price',
    TotalRepairOrderPrice = 'Total Repair Order Price',
    TotalRepairOrderPartsCost = 'Total Repair Order Parts Cost',
    TotalRepairOrderLaborCost = 'Total Repair Order Labor Cost',
    TotalRepairOrderMiscellaneousCost = 'Total Repair Order Miscellaneous Cost',
    TotalRepairOrderGOGCost = 'Total Repair Order GOG Cost',
    TotalRepairOrderSubletCost = 'Total Repair Order Sublet Cost',
    TotalRepairOrderCost = 'Total Repair Order Cost',
    TotalRepairOrderTaxPrice = 'Total Repair Order Tax Price',
    OperationPartsPrice = 'Operation Parts Price',
    OperationPartsCost = 'Operation Parts Cost',
    OperationTotalPrice = 'Operation Total Price',
    OperationTotalCost = 'Operation Total Cost',
    UnitCoreCost = 'Unit Core Cost',
    UnitCorePrice = 'Unit Core Price',
    UnitListPrice = 'Unit List Price',
    NetMiscellaneous = 'Net Miscellaneous',
    NetFreight = 'Net Freight',
    NetRestock = 'Net Restock',
    VehicleAdvertisedPrice = 'Vehicle Advertised Price',
    VehicleSellingPrice = 'Vehicle Selling Price',
    /**Dealer invoice cost of dealer installed option */
    DIOInvoicePrice = 'DIO Invoice Price',
    /**Dealer suggested retail price of dealer installed option */
    DIORetailPrice = 'DIO Retail Price'
}

export enum VehicleUseEnumeratedType {
    /**Vehicle was used as a demonstration model */
    Demonstration = 'Demonstration',
    /**Used as a rental or loaner car */
    DailyRental = 'Daily Rental',
    /**Used for personal or individual use */
    Personal = 'Personal',
    /**Used for family or house hold purposes */
    Household = 'Household',
    /**Other or unknown use */
    Other = 'Other',
    /**Not applicable */
    NotApplicable = 'Not Applicable',
    /**Taxi */
    Taxi = 'Taxi',
    /**Lease */
    Lease = 'Lease',
    /**Agriculture/Farming */
    AgricultureFarming = 'Agri/Farm',
    /**Beverage */
    Beverage = 'Beverage',
    /**Bus Transportation */
    BusTransportation = 'BusTrans',
    /**Construction */
    Construction = 'Constr',
    /**Dealer */
    Dealer = 'Dealer',
    /**Emergency Vehicle */
    EmergencyVehicle = 'Emergency',
    /**Leased-Financed */
    LeasedFinanced = 'Fin.Lease',
    /**Food Processing */
    FoodProcessing = 'FoodProc',
    /**'Forestry/Lumber */
    ForestryLumber = 'ForestLum',
    /**Gen Freight-Hazardous */
    GenFreightHazardous = 'GF/Haz',
    /**General Freight */
    GeneralFreight = 'GenFrt',
    /**Govt */
    Government = 'Govt',
    /**Hazardous */
    Hazard = 'Hazard',
    /**Individual */
    Individual = 'Individ',
    /**Landscaping */
    Landscaping = 'Landsc',
    /**Manufacturing */
    Manufacturing = 'Manuf',
    /**Leased-Manufacturing */
    LeasedManufacturing = 'Mfg.Lease',
    /**Mining */
    Mining = 'Min/Qua',
    /**Miscellaneous */
    Miscellaneous = 'Misc',
    /**Lease Rent */
    LeaseRent = 'Mnt.Lease',
    /**Moving/Storage */
    MovingStorage = 'Mov/Stor',
    /**Petroleum */
    Petroleum = 'Petro',
    /**Petroleum-Hazardous */
    PetroleumHazardous = 'Petro/Haz',
    /**Spec-Hazardous */
    SpecHazardous = 'Ref/Haz',
    /**Road/Highway */
    RoadHighway = 'Road/Hwy',
    /**Sanitation/Refuse */
    SanitationRefuse = 'San/Refuse',
    /**Services */
    Services = 'Services',
    /**Specialized Hauling */
    SpecializedHauling = 'SpecHaul',
    /**Unknown */
    Unknown = 'Unknown',
    /**Utility-Hazardous */
    UtilityHazardous = 'Util/Haz',
    /**Utility */
    Utility = 'Utility',
    /**Vehicle Transporter */
    VehicleTransporter = 'Veh.Trnsprtr',
    /**Wholesale/Retail */
    WholesaleRetail = 'Wh/Retail',
    /**Off-Road */
    OffRoad = 'OffRoad'
}

/**Class of sale */
export enum SaleClassEnumeratedType {
    /**Never owned */
    New = 'New',
    /**Previously Owned */
    Used = 'Used',
    /**Demonstration item */
    Demo = 'Demo',
    /**Other */
    Other = 'Other',
    /**Not Applicable */
    NA = 'N/A',
    /**This is a vehicle that is provided in the showroom as an example */
    FloorSample = 'Floor Sample',
    /**Identifies that the vehicle may have been used as a product demonstration for an official or executive from the manufacturer */
    Factory = 'Factor',
    /**Brand new item but not the current year */
    NonCurrent = 'Non-Current',
    /**New item but has defects */
    ScratchAndDent = 'Scratch and Dent',
    /**Used item but traded in */
    TradeIn = 'Trade In',
    /**Indicates the vehicle is to be purchased or has been purchased */
    Purchase = 'Purchase',
    /**Indicates the vehicle is to be leased or has been leased */
    Lease = 'Lease',
    /**Indicates that the data is a "spec" for a current year boat Model, i.e. not an actual boat */
    CurrentModel = 'Current Model',
    /**Indicates that the data is a "spec" for a non current year boat Model, i.e. not an actual boat */
    NonCurrentModel = 'Non Current Model',
    /**Certified Pre-Owned */
    CertifiedPreOwned = 'Certified Pre-Owned'
}

/**Type of engine on or for a boat */
export enum BoatEngineTypeEnumeratedType {
    Inboard = 'Inboard',
    /**Inboard/Outboard */
    InboardOutboard = 'Inboard/Outboard',
    Jet = 'Jet',
    Outboard = 'Outboard',
    /**Outboard 2 Stroke */
    OutboardTwoStroke = 'Outboard 2 Stroke',
    /**Outboard 4 Stroke */
    OutboardFourStroke = 'Outboard 4 Stroke',
    SternDrive = 'Stern Drive',
    VDrive = 'V Drive',
    Electric = 'Electric',
    /**An engine type that is not listed in the standard code list */
    Other = 'Other'
}

export enum CylinderConfigurationEnumeratedType {
    Inline = 'Inline',
    V = 'V',
    Rotary = 'Rotary'
}

export enum StartingSystemTypeEnumeratedType {
    /**Electric engine starting system */
    Electric = 'Electric',
    /**Pull engine starting system */
    Manual = 'Manual',
    /**Other engine starting system */
    Other = 'Other'
}

export enum ColorItemEnumeratedType {
    Hull = 'Hull',
    Engine = 'Engine',
    Deck = 'Deck',
    Seat = 'Seat',
    Carpet = 'Carpet',
    Interior = 'Interior',
    Exterior = 'Exterior',
    /**Some vehicles have a two tone paint scheme on the exterior */
    ExteriorSecondary = 'ExteriorSecondary',
    Trailer = 'Trailer',
    Top = 'Top'
}

/**Vehicle Transmission Type */
export enum TransmissionTypeEnumeratedType {
    /**3 Speed */
    ThreeSpeed = '3',
    /**4 Speed */
    FourSpeed = '4',
    /**5 Speed */
    FiveSpeed = '5',
    /**6 Speed */
    SixSpeed = '6',
    /**Automatic */
    Automatic = 'A',
    /**3 speed transmission type */
    AutomaticThreeSpeed = 'Automatic 3',
    /**4 speed transmission type */
    AutomaticFourSpeed = 'Automatic 4',
    /**5 speed transmission type */
    AutomaticFiveSpeed = 'Automatic 5',
    /**Automatic 6 speed transmission type */
    AutomaticSixSpeed = 'Automatic 6',
    /**Automatic 7 speed transmission type */
    AutomaticSevenSpeed = 'Automatic 7',
    /**7 Speed */
    SevenSpeed = '7',
    /**Continuously Variable Transmission Automatic 3 speed transmission type (natural gas and hybrid) */
    CVTAutomaticThree = 'CVT Automatic 3',
    /**Continuously Variable Transmission Automatic 4 speed transmission type (natural gas and hybrid) */
    CVTAutomaticFour = 'CVT Automatic 4',
    /**Continuously Variable Transmission Automatic 5 speed transmission type (natural gas and hybrid) */
    CVTAutomaticFive = 'CVT Automatic 5',
    /**Continuously Variable Transmission Automatic 6 speed transmission type (natural gas and hybrid) */
    CVTAutomaticSix = 'CVT Automatic 6',
    /**Continuously Variable Transmission Automatic 7 speed transmission type (natural gas and hybrid) */
    CVTAutomaticSeven = 'CVT Automatic 7',
    /**Manual Transmission */
    Manual = 'Manual'
}

/**Designates vehicle drive type */
export enum DriveTypeEnumeratedType {
    FrontWheelDrive = 'Front',
    RearWheelDrive = 'Rear',
    /**The engine is located inboard just forward transom (stern) and delivers power via a shaft that goes through the transom to the drive unit */
    Stern = 'Stern',
    /**An arrangement of an inboard motor that is about a sailboat's equivalent of a motorboat's stern drive.  The difference is the motor sticks out of the bottom of the hull of the boat, instead of from the stern */
    Sail = 'Sail',
    /**Consists of two drive shafts, a gear box, and a propeller.  
     * In these types of "v-Drive" boats the engine is mounted in the rear of the boat and the front of the engine faces aft.  
     * Connected to the rear of the engine is the tgransmission and out of the transmission comes the first of the two drive shafts.  
     * This drive shaft connects to the rear of the transmission and to the gearbox which is mounted in the center of the boat.  
     * Then out of the gearbox comes the second drive shaft which extends to the rear and out the bottom of the boat 
     * which gives the propulsion system it's V configuration.  At the end of the second drive shaft the propeller is mounted */
    VDrive = 'V',
    /**Unlike a powerboat or motorboat that uses a propeller in the water below or behind the boat, a jet drive draws the water from under the boat into a pump-jet inside the boat, then expels it through a nozzle at the stern */
    Jet = 'Jet',
    /**Configuration where a drive shaft is used to connect the transmission to the propeller */
    Direct = 'Direct',
    /**Engine(s) located aft or amidships, mated to a transmission with an output shaft passing through the transom to a non-steering outdrive that locates the propeller near the water surface.  Usually associated with high-performance boats and yachts */
    Surface = 'Surface',
    /**Engine drives a propeller spinning in the air to create thrust to move the craft forward.  Used on hovercraft and air boats */
    AirPropeller = 'Air Propeller',
    /**Engines located amidships and mated to pivoting drive units located below the hull that steer the boat by changing the direction of propeller thrust */
    Pod = 'Pod',
    /**Other drive type not available in the list */
    Other = 'Other'
}

/**Identifies marital status of business part */
export enum MaritalStatusEnumeratedType {
    Married = 'M',
    Unmarried = 'U',
    Separated = 'S',
    Other = 'O'
}

/**Gender of party */
export enum GenderEnumeratedType {
    Male = 'M',
    Female = 'F',
    Neuter = 'N',
    Other = 'O'
}

/**Type of transaction */
export enum TransactionTypeEnumeratedType {
    InitialTransaction = 'Initial',
    UpdateTransaction = 'Update',
    DeleteTransaction = 'Delete',
    CancelTranaction = 'Cancel'
}

export enum TwoLetterCountryEnumeratedType {
    UnitedStates = 'US',
    Afghanistan = 'AF',
    Albania = 'AL',
    Algeria = 'DZ',
    AmericanSamoa = 'AS',
    Andorra = 'AD',
    Angola = 'AO',
    Anguilla = 'AI',
    Antarctica = 'AQ',
    AntiguaAndBarbuda = 'AG',
    Argentina = 'AR',
    Armenia = 'AM',
    Aruba = 'AW',
    Australia = 'AU',
    Austria = 'AT',
    Azerbaijan = 'AZ',
    Bahamas = 'BS',
    Bahrain = 'BH',
    Bangladesh = 'BD',
    Barbados = 'BB',
    Belarus = 'BY',
    Belgium = 'BE',
    Belize = 'BZ',
    Benin = 'BJ',
    Bermuda = 'BM',
    Bhutan = 'BT',
    Bolivia = 'BO',
    BosniaAndHerzegonia = 'BA',
    Botswana = 'BW',
    BouvetIsland = 'BV',
    Brazil = 'BR',
    BritishIndianOceanTerritory = 'IO',
    BruneiDarussalam = 'BN',
    Bulgaria = 'BG',
    BurkinaFaso = 'BF',
    Burundi = 'BI',
    Cambodia = 'KH',
    Cameroon = 'CM',
    Canada = 'CA',
    CapeVerde = 'CV',
    Curacao = 'CW',
    CaymanIslands = 'KY',
    CentralAfricanRepublic = 'CF',
    Chad = 'TD',
    Chile = 'CL',
    China = 'CN',
    ChristmasIsland = 'CX',
    CocosKeelingIslands = 'CC',
    Colombia = 'CO',
    Comoros = 'KM',
    Congo = 'CG',
    DemocraticRepublicOfTheCongo = 'CD',
    CookIslands = 'CK',
    CostaRica = 'CR',
    CoteDIvoire = 'CI',
    Croatia = 'HR',
    Cuba = 'CU',
    Cyprus = 'CY',
    CzechRepublic = 'CZ',
    Denmark = 'DK',
    Djibouti = 'DJ',
    Dominica = 'DM',
    DominicanRepublic = 'DO',
    Ecuador = 'EC',
    Egypt = 'EG',
    ElSalvador = 'SV',
    EquatorialGuinea = 'GQ',
    Eritrea = 'ER',
    Estonia = 'EE',
    Ethiopia = 'ET',
    FalklandIslandsMalvinas = 'FK',
    FaroeIslands = 'FO',
    Fiji = 'FJ',
    Finland = 'FI',
    France = 'FR',
    FrenchGuiana = 'GF',
    FrenchPolynesia = 'PF',
    FrenchSouthernTerritories = 'TF',
    Gabon = 'GA',
    Gambia = 'GM',
    Georgia = 'GE',
    Germany = 'DE',
    Ghana = 'GH',
    Gibraltar = 'GI',
    Greece = 'GR',
    Greenland = 'GL',
    Grenada = 'GD',
    Guadeloupe = 'GP',
    Guam = 'GU',
    Guatemala = 'GT',
    Guinea = 'GN',
    GuineaBissau = 'GW',
    Guyana = 'GY',
    Haiti = 'HT',
    HeardIslandAndMcDonaldIslands = 'HM',
    HolySeeVaitcanCityState = 'VA',
    Honduras = 'HN',
    HongKong = 'HK',
    Hungary = 'HU',
    Iceland = 'IS',
    India = 'IN',
    Indonesia = 'ID',
    IslamicRepublicOfIran = 'IR',
    Iraq = 'IQ',
    Ireland = 'IE',
    Israel = 'IL',
    Italy = 'IT',
    Jamaica = 'JM',
    Japan = 'JP',
    Jordan = 'JO',
    Kazakhstan = 'KZ',
    Kenya = 'KE',
    Kiribati = 'KI',
    DemocraticPeoplesRepublicOfKorea = 'KP',
    RepublicOfKorea = 'KR',
    Kuwait = 'KW',
    Kyrgyzstan = 'KG',
    LaoPeoplesDemocraticRepublic = 'LA',
    Latvia = 'LV',
    Lebanon = 'LB',
    Lesotho = 'LS',
    Liberia = 'LR',
    LibyanArabJamahiriya = 'LY',
    Liechtenstein = 'LI',
    Lithuania = 'LT',
    Luxembourg = 'LU',
    Macao = 'MO',
    FormerYugoslavRepublicOfMacedonia = 'MK',
    Madagascar = 'MG',
    Malawi = 'MW',
    Malaysia = 'MY',
    Maldives = 'MV',
    Mali = 'ML',
    Malta = 'MT',
    MarshallIslands = 'MH',
    Martinique = 'MQ',
    Mauritania = 'MR',
    Mauritius = 'MU',
    Mayotte = 'YT',
    Mexico = 'MX',
    FederatedStatesOfMicronesia = 'FM',
    RepublicOfMoldova = 'MD',
    Monaco = 'MC',
    Mongolia = 'MN',
    Montserrat = 'MS',
    Morocco = 'MA',
    Mozambique = 'MZ',
    Myanmar = 'MM',
    Namibia = 'NA',
    Nauru = 'NR',
    Nepal = 'NP',
    Netherlands = 'NL',
    NetherlandsAntilles = 'AN',
    NewCaledonia = 'NC',
    NewZealand = 'NZ',
    Nicaragua = 'NI',
    Niger = 'NE',
    Nigeria = 'NG',
    Niue = 'NU',
    NorfolkIsland = 'NF',
    NorthernMarianaIslands = 'MP',
    Norway = 'NO',
    Oman = 'OM',
    Pakistan = 'PK',
    Palau = 'PW',
    OccupiedPalestinianTerritory = 'PS',
    Panama = 'PA',
    PapuaNewGuinea = 'PG',
    Paraguay = 'PY',
    Peru = 'PE',
    Philippines = 'PH',
    Pitcairn = 'PN',
    Poland = 'PL',
    Portugal = 'PT',
    PuertoRico = 'PR',
    Qatar = 'QA',
    Reunion = 'RE',
    Romania = 'RO',
    RussianFederation = 'RU',
    Rwanda = 'RW',
    SaintHelena = 'SH',
    SaintKittsAndNevis = 'KN',
    SaintLucia = 'LC',
    SaintPierraAndMiquelon = 'PM',
    SaintVincentAndTheGrenadines = 'VC',
    Samoa = 'WS',
    SanMarino = 'SM',
    SouthSudan = 'SS',
    SaoTomeAndPrincipe = 'ST',
    SaudiArabia = 'SA',
    Senegal = 'SN',
    SintMaartenDutchPart = 'SX',
    Seychelles = 'SC',
    SierraLeone = 'SL',
    Singapore = 'SG',
    Slovakia = 'SK',
    Slovenia = 'SI',
    SolomonIslands = 'SB',
    Somalia = 'SO',
    SouthAfrica = 'ZA',
    SouthGeorgeAndTheSouthSandwichIslands = 'GS',
    Spain = 'ES',
    SriLanka = 'LK',
    Sudan = 'SD',
    Suriname = 'SR',
    SvalbardAndJanMayen = 'SJ',
    Swaziland = 'SZ',
    Sweden = 'SE',
    Switzerland = 'CH',
    SyrianArabRepublic = 'SY',
    ProvinceOfChinaTiawan = 'TW',
    Tajikistan = 'TJ',
    Tanzania = 'TZ',
    Thailand = 'TH',
    TimorLeste = 'TL',
    Togo = 'TG',
    Tokelau = 'TK',
    Tonga = 'TO',
    TrinidadAndTobago = 'TT',
    Tunisia = 'TN',
    Turkey = 'TR',
    Turkmenistan = 'TM',
    TurksAndCaicosIslands = 'TC',
    Tuvalu = 'TV',
    Uganda = 'UG',
    Ukraine = 'UA',
    UnitedArabEmirates = 'AE',
    UnitedKingdom = 'GB',
    UnitedStatesMinorOutlyingIslands = 'UM',
    Uruguay = 'UY',
    Uzbekistan = 'UZ',
    Vanuatu = 'VU',
    Venezuela = 'VE',
    Vietnam = 'VN',
    BritishVirginIslands = 'VG',
    USVirginIslands = 'VI',
    WallisAndFutuna = 'WF',
    WesternSahara = 'EH',
    Yemen = 'YE',
    Zambia = 'ZM',
    Zimbabwe = 'ZW',
    Guernsey = 'GG',
    IsleOfMilan = 'IM',
    Serbia = 'RS',
    StMaartenStMartin = 'MF',
    AlandIslands = 'AX',
    StBarthilemy = 'BL',
    Montenegro = 'ME',
    Jersey = 'JE'
}

export enum ThreeLetterCountryEnumeratedType {
    UnitedStatues = 'USA',
    Afghanistan = 'AFG',
    Albania = 'ALB',
    Algeria = 'DZA',
    AmericanSamoa = 'ASM',
    Andorra = 'AND',
    Angola = 'AGO',
    Anguilla = 'AIA',
    Antarctica = 'ATA',
    AntiguaAndBarbuda = 'ATG',
    Argentina = 'ARG',
    Armenia = 'ARM',
    Aruba = 'ABW',
    Australia = 'AUS',
    Austria = 'AUT',
    Azerbaijan = 'AZE',
    Bahamas = 'BHS',
    Bahrain = 'BHR',
    Bangladesh = 'BGD',
    Barbados = 'BRB',
    Belarus = 'BLR',
    Belgium = 'BEL',
    Belize = 'BLZ',
    Benin = 'BEN',
    Bermuda = 'BMU',
    Bhutan = 'BTN',
    Bolivia = 'BOL',
    BosniaAndHerzegovina = 'BIH',
    Botswana = 'BWA',
    BouvetIsland = 'BVT',
    Brazil = 'BRA',
    BritishIndianOceanTerritory = 'IOT',
    BruneiDarussalam = 'BRN',
    Bulgaria = 'BGR',
    BurkinaFaso = 'BFA',
    Burundi = 'BDI',
    Cambodia = 'KHM',
    Cameroon = 'CMR',
    Canada = 'CAN',
    CapeVerde = 'CPV',
    Curacao = 'CUW',
    CaymanIslands = 'CYM',
    CentralAfricanRepublic = 'CAF',
    Chad = 'TCD',
    Chile = 'CHL',
    China = 'CHN',
    ChristmasIsland = 'CXR',
    CocosKeelingIslands = 'CCK',
    Colombia = 'COL',
    Comoros = 'COM',
    Congo = 'COG',
    DemocraticRepublicOfTheCongo = 'COD',
    CookIslands = 'COK',
    CostaRica = 'CRI',
    CoteDIvoire = 'CIV',
    Croatia = 'HRV',
    Cuba = 'CUB',
    Cyprus = 'CYP',
    CzechRepublic = 'CZE',
    Denmark = 'DNK',
    Djibouti = 'DJI',
    Dominica = 'DMA',
    DominicanRepublic = 'DOM',
    Ecuador = 'ECU',
    Egypt = 'EGY',
    ElSalvador = 'SLV',
    EquatorialGuinea = 'GNQ',
    Eritrea = 'ERI',
    Estonia = 'EST',
    Ethiopia = 'ETH',
    FalklandIslandsMalvinas = 'FLK',
    FaroeIslands = 'FRO',
    Fiji = 'FJI',
    Finland = 'FIN',
    France = 'FRA',
    FrenchGuiana = 'GUF',
    FrenchPolynesia = 'PYF',
    FrenchSouthernTerritories = 'ATF',
    Gabon = 'GAB',
    Gambia = 'GMB',
    Georgia = 'GEO',
    Germany = 'DEU',
    Ghana = 'GHA',
    Gibraltar = 'GIB',
    Greece = 'GRC',
    Greenland = 'GRL',
    Grenada = 'GRD',
    Guadeloupe = 'GLP',
    Guam = 'GUM',
    Guatemala = 'GTM',
    Guinea = 'GIN',
    GuineaBissau = 'GNB',
    Guyana = 'GUY',
    Haiti = 'HTI',
    HeardIslandAndMcDonaldIslands = 'HMD',
    HolySeeVaitcanCityState = 'VAT',
    Honduras = 'HND',
    HongKong = 'HKG',
    Hungary = 'HUN',
    Iceland = 'ISL',
    India = 'IND',
    Indonesia = 'IDN',
    IslamicRepublicOfIran = 'IRN',
    Iraq = 'IRQ',
    Ireland = 'IRL',
    Israel = 'ISR',
    Italy = 'ITA',
    Jamaica = 'JAM',
    Japan = 'JPN',
    Jordan = 'JOR',
    Kazakhstan = 'KAZ',
    Kenya = 'KEN',
    Kiribati = 'KIR',
    DemocraticPeoplesRepublicOfKorea = 'PRK',
    RepublicOfKorea = 'KOR',
    Kuwait = 'KWT',
    Kyrgyzstan = 'KGZ',
    LaoPeoplesDemocraticRepublic = 'LAO',
    Latvia = 'LVA',
    Lebanon = 'LBN',
    Lesotho = 'LSO',
    Liberia = 'LBR',
    LibyanArabJamahiriya = 'LBY',
    Liechstenstein = 'LIE',
    Lithuania = 'LTU',
    Luxembourg = 'LUX',
    Macao = 'MAC',
    FormerYugoslavRepublicOfMacedonia = 'MKD',
    Madagascar = 'MDG',
    Malawi = 'MWI',
    Malaysia = 'MYS',
    Maldives = 'MDV',
    Mali = 'MLI',
    Malta = 'MLT',
    MarshallIslands = 'MHL',
    Martinique = 'MTQ',
    Mauritania = 'MRR',
    Mauritius = 'MUS',
    Mayotte = 'MYT',
    Mexico = 'MEX',
    FederatedStatesOfMicronesia = 'FSM',
    RepublicOfMoldova = 'MDA',
    Monaco = 'MCO',
    Mongolia = 'MNG',
    Montserrat = 'MSR',
    Morocco = 'MAR',
    Mozambique = 'MOZ',
    Myanmar = 'MMR',
    Namibia = 'NAM',
    Nauru = 'NRU',
    Nepal = 'NPL',
    Netherlands = 'NLD',
    NetherlandsAntilles = 'ANT',
    NewCaledonia = 'NCL',
    NewZealand = 'NZL',
    Nicaragua = 'NIC',
    Niger = 'NER',
    Nigeria = 'NGA',
    Niue = 'NIU',
    NorfolkIsland = 'NFK',
    NorthernMarianaIslands = 'MNP',
    Norway = 'NOR',
    Oman = 'OMN',
    Pakistan = 'PAK',
    Palau = 'PLW',
    OccupiedPalestinianTerritory = 'PSE',
    Panama = 'PAN',
    PapuaNewGuinea = 'PNG',
    Paraguay = 'PRY',
    Peru = 'PER',
    Philippines = 'PHL',
    Pitcairn = 'PCN',
    Poland = 'POL',
    Portugal = 'PRT',
    PuertoRico = 'PRI',
    Qatar = 'QAT',
    Reunion = 'REU',
    Romania = 'ROU',
    RussianFederation = 'RUS',
    Rwanda = 'RWA',
    SaintHelena = 'SHN',
    SaintKittsAndNevis = 'KNA',
    SaintLucia = 'LCA',
    SaintPierraAndMiquelon = 'SPM',
    SaintVincentAndTheGrenadines = 'VCT',
    Samoa = 'WSM',
    SanMarino = 'SMR',
    SouthSudan = 'SSD',
    SaoTomeAndPrincipe = 'STP',
    SaudiArabia = 'SAU',
    Senegal = 'SEN',
    Seychelles = 'SYC',
    SierraLeone = 'SLE',
    Singapore = 'SGP',
    Slovakia = 'SVK',
    Slovenia = 'SVN',
    SolomonIslands = 'SLB',
    Somalia = 'SOM',
    SouthAfrica = 'ZAF',
    SouthGeorgeAndTheSouthSandwichIslands = 'SGS',
    Spain = 'ESP',
    SriLanka = 'LKA',
    Sudan = 'SDN',
    Suriname = 'SUR',
    SvalbardAndJanMayen = 'SJM',
    Swaziland = 'SWZ',
    Sweden = 'SWE',
    Switzerland = 'CHE',
    SyrianArabRepublic = 'SYR',
    ProvinceOfChinaTiawan = 'TWN',
    Tajikistan = 'TJK',
    Tanzania = 'TZA',
    Thailand = 'THA',
    TimorLeste = 'TLS',
    Togo = 'TGO',
    Tokelau = 'TKL',
    Tonga = 'TON',
    TrinidadAndTobago = 'TTO',
    Tunisia = 'TUN',
    Turkey = 'TUR',
    Turkmenistan = 'TKM',
    TurksAndCaicosIslands = 'TCA',
    Tuvalu = 'TUV',
    Uganda = 'UGA',
    Ukraine = 'UKR',
    UnitedArabEmirates = 'ARE',
    UnitedKingdom = 'GBR',
    UnitedStatesMinorOutlyingIslands = 'UMI',
    Uruguay = 'URY',
    Uzbekistan = 'UZB',
    Vanuatu = 'VUT',
    Venezuela = 'VEN',
    Vietnam = 'VNM',
    BritishVirginIslands = 'VGB',
    USVirginIslands = 'VIR',
    WallisAndFutuna = 'WLF',
    WesternSahara = 'ESH',
    Yemen = 'YEM',
    Zambia = 'ZMB',
    Zimbabwe = 'ZWE',
    Guernsey = 'GGY',
    IsleOfMilan = 'IMN',
    Serbia = 'SRB',
    StMaartenStMartin = 'MAF',
    AlandIslands = 'ALA',
    StBarthilemy = 'BLM',
    Montenegro = 'MNE',
    Jersey = 'JEY'
}

/**Country in which the address is in */
export type CountryEnumeratedType = TwoLetterCountryEnumeratedType | ThreeLetterCountryEnumeratedType;

export enum ConfirmationEnumeratedType {
    /**Never send confirmation */
    Never = 'Never',
    /**Only send confirmation on error */
    OnError = 'OnError',
    /**Always send confirmation */
    Always = 'Always'
}

export enum LanguageEnumeratedType {
    EnglishAmerican = 'en-US',
    EnglishCanada = 'en-CA',
    AfarEthiopia = 'aa-ET',
    AbkhazianGeorgia = 'ab-GE',
    AfrikaansSouthAfrica = 'af-ZA',
    AmharicEthiopia = 'am-ET',
    ArabicSaudiArabia = 'ar-SA',
    AssameseIndia = 'as-IN',
    AymaraBolivia = 'ay-BO',
    AzerbaijaniAzerbaijan = 'az-AZ',
    BashkirRussianRederation = 'ba-RU',
    ByelorussianBelarus = 'be-BY',
    BulgarianBulgaria = 'bg-BG',
    BihariIndia = 'bh-IN',
    BislamaVanuatu = 'bi-VU',
    BengaliBanglaBangladesh = 'bn-BD',
    TibetanBhutan = 'bo-BT',
    BretonFrance = 'br-FR',
    CatalanSpain = 'ca-ES',
    CorsicanFrance = 'co-FR',
    CzechCzechRepublic = 'cs-CZ',
    WelshUnitedKingdom = 'cy-GB',
    DanishGermany = 'da-DE',
    DanishDenmark = 'da-DK',
    GermanGermany = 'da-DE',
    BhutaniBhutan = 'dz-BT',
    GreekGreece = 'el-GR',
    SpanishSpain = 'es-ES',
    EstonianEstonia = 'et-EE',
    BasqueSpain = 'eu-ES',
    PersianAfghanistan = 'fa-AF',
    FinnishFinlands = 'fi-FI',
    FijiFiji = 'fj-FJ',
    FaeroeseFaroeIslands = 'fo-FO',
    FrenchCanada = 'fr-CA',
    FrenchFrance = 'fr-FR',
    FrisianNetherlands = 'fy-NL',
    IrishIreland = 'ga-IE',
    GaelicScotsGaelicUnitedKingdom = 'gd-GB',
    GalicianSpain = 'gl-ES',
    GuaraniParaguay = 'gn-PY',
    GujaratiIndonesia = 'gu-IN',
    HausaNigeria = 'ha-NG',
    HindiIndia = 'hi-IN',
    CroatianCroatia = 'hr-HR',
    HungarianHungary = 'hu-HU',
    ArmenianArmenia = 'hy-AM',
    InupiakGreenland = 'ik-GL',
    IndonesianIndonesia = 'in-ID',
    IcelandicIceland = 'is-IS',
    ItalianItaly = 'it-IT',
    HebrewIsrael = 'iw-IL',
    JapaneseJapan = 'ja-JP',
    YiddishIsrael = 'ji-IL',
    JavaneseIndonesia = 'jw-ID',
    GeorgianGeorgia = 'ka-GE',
    KazakhKazakhstan = 'kk-KZ',
    GreenlandicGreenland = 'kl-GL',
    CambodianCambodia = 'km-KH',
    KannadaIndia = 'kn-IN',
    KoreanDemocraticPeoplesRepublicOfKorea = 'ko-KP',
    KoreanRepublicOfKorea = 'ko-KR',
    KashmiriIndia = 'ks-IN',
    KurdishIraq = 'ku-IQ',
    KirghizChina = 'ky-CN',
    LatinHolySeeVaticanCityState = 'la-VA',
    LingalaDemocraticRepublicOfTheCongo = 'ln-CD',
    LaothianLaoPeoplsDemocraticRepublic = 'lo-LA',
    LithuanianLithuania = 'lt-LT',
    LatvianLettishLatvia = 'lv-LV',
    MalagasyMadagascar = 'mg-MG',
    MaoriNewZealand = 'mi-NZ',
    MacedonianFormerYugoslavMacedonia = 'mk-MK',
    MalayalamIndia = 'ml-IN',
    MongolianMongolia = 'mn-MN',
    MoldavianMacao = 'mo-MO',
    MarathiIndia = 'mr-IN',
    MalayMalaysia = 'ms-MY',
    MalteseMarshallIslands = 'mt-MH',
    BurmeseMyanmar = 'my-MM',
    NauruNauru = 'na-NR',
    NepaliNepal = 'ne-NP',
    DutchNetherlands = 'nl-NL',
    NorwegianNorway = 'no-NO',
    OccitanFrance = 'oc-FR',
    OromoAfanEthiopia = 'om-ET',
    OriyaIndia = 'or-IN',
    PunjabiIndia = 'pa-IN',
    PolishPoland = 'pl-PL',
    PashtoPushtoPakistan = 'ps-PK',
    PortuguesePortugal = 'pt-PT',
    QuechuaPeru = 'qu-PE',
    RhaetoRomanceSwitzerland = 'rm-CH',
    KirundiBurundi = 'rn-BI',
    RomanianRomania = 'ro-RO',
    RussianRussianFederation = 'ru-RU',
    KinyarwandaRwanda = 'rw-RW',
    SanskirtIndia = 'sa-IN',
    SindhiPakistan = 'sd-PK',
    SangroCentralAfricanRepublic = 'sg-CF',
    SerboCroatianCroatia = 'sh-HR',
    SinghaleseSriLanka = 'si-LK',
    SlovakSlovakia = 'sk-SK',
    SlovenianSlovenia = 'sl-SI',
    SamoanSamoa = 'sm-WS',
    ShonaZimbabwe = 'sn-ZW',
    SomaliSomalia = 'so-SO',
    AlbanianAlbania = 'sq-AL',
    SerbianSerbiaAndMontenegro = 'sr-CS',
    SiswatiSouthAfrica = 'ss-ZA',
    SesothoSouthAfrica = 'st-ZA',
    SudaneseSudan = 'su-SD',
    SwedishSweden = 'sv-SE',
    SwahiliTimorLeste = 'sw-TL',
    TamilIndia = 'ta-IN',
    TeguluIndia = 'te-IN',
    TajikTajikistan = 'tg-TJ',
    ThaiThailand = 'th-TH',
    TigrinyaEthiopia = 'ti-ET',
    TurkmenTurkmenistan = 'tk-TM',
    TagalogPhilippines = 'tl-PH',
    SetswanaSouthAfrica = 'tn-ZA',
    TongaTonga = 'to-TO',
    TurkishTurkey = 'tr-TR',
    TsongaSouthAfrica = 'ts-ZA',
    TatarRussianFederation = 'tt-RU',
    TwiGhana = 'tw-GH',
    UkrainianUkraine = 'uk-UA',
    UrduPakistan = 'ur-PK',
    UzbekUzbekistan = 'uz-UZ',
    VietnameseVietnam = 'vi-VN',
    WolofSenegal = 'wo-SN',
    XhosaSouthAfrica = 'xh-ZA',
    YorubaNigeria = 'yo-NG',
    ChineseChina = 'zh-CN',
    ZuluSouthAfrica = 'zu-ZA',
    EnglishUnitedKingdom = 'en-GB',
    MandarinTaiwan = 'zh-TW',
    SpanishMexico = 'es-MX',
    PortugueseBrazil = 'pt-BR',
    DutchBelgium = 'nl-BE',
    FrenchBelgium = 'fr-BE',
    GermanBelgium = 'de-BE'
}