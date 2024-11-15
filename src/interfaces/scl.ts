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
//     xsd:simpleType name="TaxTypeIdEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">CS - City, CP - County, ST - State, OT - Other, EX - Excise, VAT - Value Added Tax, PST - Provincial Sales Tax , RT - Rental, GST - Goods and Services Tax, HST - Harmonized Tax, ART - Air Tax, QST - Quebec Sales Tax, IMP - Import Tax</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="CS">
//             <xsd:annotation>
//                 <xsd:documentation>City</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CP">
//             <xsd:annotation>
//                 <xsd:documentation>County</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ST">
//             <xsd:annotation>
//                 <xsd:documentation>State</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OT">
//             <xsd:annotation>
//                 <xsd:documentation>Other</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EX">
//             <xsd:annotation>
//                 <xsd:documentation>Excise</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VAT">
//             <xsd:annotation>
//                 <xsd:documentation>Value Added</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PST">
//             <xsd:annotation>
//                 <xsd:documentation>Provincial Sales Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RT">
//             <xsd:annotation>
//                 <xsd:documentation>Rental</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GST">
//             <xsd:annotation>
//                 <xsd:documentation>Goods and Services Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HST">
//             <xsd:annotation>
//                 <xsd:documentation>Harmonized Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ART">
//             <xsd:annotation>
//                 <xsd:documentation>Air Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="QST">
//             <xsd:annotation>
//                 <xsd:documentation>Quebec Sales Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IMP">
//             <xsd:annotation>
//                 <xsd:documentation>Import Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IPartTypeEnumeratedType {
//     xsd:simpleType name="PartTypeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Specifies whether the parts are indicated by manufacturer part code or Part Number - H = Manufacturer Part Code, P = Part Number</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="H">
//             <xsd:annotation>
//                 <xsd:documentation>Manufacturer Part Code</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="P">
//             <xsd:annotation>
//                 <xsd:documentation>Part Number</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IUOMEnumeratedType {
//     <xsd:simpleType name="UOMEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Units of Measure - ea=Each; bx=Box; case=Case; ctn=Carton; gal=Gallon; qt=Quart; pt=Pint; ft=Feet; yd=Yard; in=Inch; L=Liter; m=Meter; cm=Centimeter; kg=Kilograms; g=grams; other=Other</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="ea">
//             <xsd:annotation>
//                 <xsd:documentation>Each</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bx">
//             <xsd:annotation>
//                 <xsd:documentation>Box</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="case">
//             <xsd:annotation>
//                 <xsd:documentation>Case</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ctn">
//             <xsd:annotation>
//                 <xsd:documentation>Carton</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="gal">
//             <xsd:annotation>
//                 <xsd:documentation>Gallon</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="qt">
//             <xsd:annotation>
//                 <xsd:documentation>Quart</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pt">
//             <xsd:annotation>
//                 <xsd:documentation>Pint</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ft">
//             <xsd:annotation>
//                 <xsd:documentation>Foot</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="yd">
//             <xsd:annotation>
//                 <xsd:documentation>Yard</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="in">
//             <xsd:annotation>
//                 <xsd:documentation>Inch</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="L">
//             <xsd:annotation>
//                 <xsd:documentation>Liter</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="m">
//             <xsd:annotation>
//                 <xsd:documentation>meter</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="cm">
//             <xsd:annotation>
//                 <xsd:documentation>centimeter</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="kg">
//             <xsd:annotation>
//                 <xsd:documentation>Kilogram</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="g">
//             <xsd:annotation>
//                 <xsd:documentation>Gram</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="other">
//             <xsd:annotation>
//                 <xsd:documentation>Other</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tn">
//             <xsd:annotation>
//                 <xsd:documentation>Ton</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="km">
//             <xsd:annotation>
//                 <xsd:documentation>kilometers</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mi">
//             <xsd:annotation>
//                 <xsd:documentation>miles</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="hp">
//             <xsd:annotation>
//                 <xsd:documentation>horsepower</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="kw">
//             <xsd:annotation>
//                 <xsd:documentation>kilowatt</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pound">
//             <xsd:annotation>
//                 <xsd:documentation>pound</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pk">
//             <xsd:annotation>
//                 <xsd:documentation>pack</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pr">
//             <xsd:annotation>
//                 <xsd:documentation>pair</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="rl">
//             <xsd:annotation>
//                 <xsd:documentation>roll</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bt">
//             <xsd:annotation>
//                 <xsd:documentation>bottle</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="cs">
//             <xsd:annotation>
//                 <xsd:documentation>crate</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="h">
//             <xsd:annotation>
//                 <xsd:documentation>hour</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="set">
//             <xsd:annotation>
//                 <xsd:documentation>set</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="can">
//             <xsd:annotation>
//                 <xsd:documentation>canister</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pc">
//             <xsd:annotation>
//                 <xsd:documentation>piece</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tb">
//             <xsd:annotation>
//                 <xsd:documentation>tube</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IPartSalesRestrictionCodeEnumeratedType {
//     <xsd:simpleType name="PartSalesRestrictionCodeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Identifies if the sale of a part is restricted</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="0">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">OK to sell the part</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="1">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Restricted distribution</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="2">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Not for Sale</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IPartOrderingRestrictionCodeEnumeratedType {
//     <xsd:simpleType name="PartOrderingRestrictionCodeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Identifies if the ordering of a part is restricted</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="0">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">No restrictions</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="3">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Obsolete</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="4">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Non-USA part</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="5">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Out of Production</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="6">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">No longer Procured</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="7">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Not yet Adopted</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IPriceEnumeratedType {
//     <xsd:simpleType name="PriceEnumeratedType">
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Loan">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Amount lenders
//                         typically loan on the listed vehicle.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Retail">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Amount typically sold
//                         for to a retail customer (dealer to consumer, or consumer to consumer
//                         transactions).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Trade-In">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Amount allowed by
//                         dealers on a trade.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="List">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">This is the advertised
//                         price of the item.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Sold">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">This is the price at
//                         which the item actually sold.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Actual Wholesale Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">The vehicle invoice
//                         amount minus the dealer's holdback amount which is the amount that is paid
//                         to the dealer on a vehicle basis refunding the dealer for inflated vehicle
//                         invoice amounts.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Dealer Discount Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Discount off the
//                         original retail price by the Dealer (comes out of the Dealer's
//                         revenue).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OEM Discount Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Discount off the
//                         original retail price by the OEM (comes out of the OEM's
//                         revenue).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Core Price Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">The value of a used
//                         part if returned to the OEM for refurbishing.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="National Fleet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Fleet price for a
//                         national account.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Major Fleet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Fleet price for a major
//                         fleet acount.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Fleet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Fleet
//                         price.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Extended Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">The quantity of an item
//                         times the sold price less all discounts plus all additions for an item.
//                         Formula: item quantity x sold price - (all discounts + all
//                         additions)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Extended Core Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Total core
//                         value</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Suggested Retail Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Selling price suggested
//                         by the sender.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Gross Discount Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">The gross amount of all
//                         discounts applied to an item.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Parts Invoice Item Net Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">The difference between
//                         the Extended Amount and the Gross Discount Amount to be paid for an
//                         item.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Option MSRP">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Total of all
//                         itemized products of the Manufactured Suggested Retail
//                         Price.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Unit Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Price of single
//                         unit</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Submitted Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">The submitted
//                         price is the dealer's while the Retail price is the OEM's. The OEM will
//                         classify the dealer's submitted retail price as the submitted
//                         price.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Select Fleet">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">A specially
//                         contracted fleet.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Reconditioning Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">The total amount
//                         a dealer spends on Vehicle preparation for Mechanical Reconditioning
//                         .</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Vehicle Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Sum of all
//                         Vehicle Cost of sales.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Certification Fee">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">The amount spent
//                         by dealer as a certification fee.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Actual Cash Value">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">The
//                         appraisal/actual cash value paid by the dealer during trade-in or at the
//                         time of auction.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Base MSRP">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">MSRP for the
//                         vehicle with no options</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Standard MSRP">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">MSRP for a
//                         vehicle with standard options</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="High MSRP">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">MSRP for vehicle
//                         with all options</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Job">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Labor">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Parts">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Sublet">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Miscellaneous">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GasOilGrease">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PaintMaterials">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ShopSupplies">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Freight">
//             <xsd:annotation>
//                 <xsd:documentation>Price for Transportation.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Claim">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SubletLabor">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SubletParts">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ReturnCore">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Customer">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Internal">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RentLoaner">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Return">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Splits">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Prepping">
//             <xsd:annotation>
//                 <xsd:documentation>Preparation Price</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PackAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Additional cost dealer adds above initial cost that is not
//                         included in commission</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HoldBackAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Amount that the OEM retains, and is provided to the dealer
//                         after the sale</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PartCost">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CampaignPrice">
//             <xsd:annotation>
//                 <xsd:documentation>Campaign Price</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LowestAcceptablePrice">
//             <xsd:annotation>
//                 <xsd:documentation>Lowest Acceptable Price</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="InternetPrice">
//             <xsd:annotation>
//                 <xsd:documentation>Internet Price</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OtherDiscountAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Other Discount Amount</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OtherSurchargeAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Other Surcharge Amount</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SubtotalIncludingDiscount">
//             <xsd:annotation>
//                 <xsd:documentation>Subtotal Including Discount</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TotalAmountExcludingTax">
//             <xsd:annotation>
//                 <xsd:documentation>Total Amount Excluding Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TotalTaxAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Total Tax Amount</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TotalAmountIncludingTax">
//             <xsd:annotation>
//                 <xsd:documentation>Total Amount Including Tax</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EstimatedAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Estimated Amount for Repairs</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AdditionalWorkRequestEstimatedAmount">
//             <xsd:annotation>
//                 <xsd:documentation>Estimated Amount for Additional Work Requested by the
//                         Customer</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Cost">
//             <xsd:annotation>
//                 <xsd:documentation>A generic cost</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Trades Actual Cash Value">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Trades Actual
//                         Cash Value </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Trades Payoff Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Trades Payoff
//                         Amount </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Accessories">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Accessories
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Gross Profit">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Gross Profit
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Frontend Gross Profit">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Frontend Gross Profit
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Backend Gross Profit">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Backend Gross Profit
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Balloon Payment">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Balloon Payment
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Term Depreciation">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Term
//                         Depreciation </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Drive Off Amount">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Drive Off Amount
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net List Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net List Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Core Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Core Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Core Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Core Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Total">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Total
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total List Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total List Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Core Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Core Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Core Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Core Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Tax">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Tax
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Miscellaneous">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Miscellaneous
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Freight">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Freight
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Restock">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Restock
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Net">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Net
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Invoice">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Invoice
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Parts Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Parts
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Labor Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Labor
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Miscellaneous Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer
//                         Miscellaneous Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer GOG Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer GOG
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Sublet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Sublet
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Repair Order Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Repair
//                         Order Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Parts Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Parts
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Labor Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Labor
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Miscellaneous Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer
//                         Miscellaneous Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer GOG Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer GOG
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Sublet Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Sublet
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Customer Repair Order Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Customer Repair
//                         Order Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Parts Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Padts
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Labor Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Labor
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Miscellaneous Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty
//                         Miscellaneous Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty GOG Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty GOG
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Sublet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Sublet
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Repair Order Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Repair
//                         Order Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Parts Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Parts
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Labor Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranry Labor
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Miscellaneous Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty
//                         Miscellaneous Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty GOG Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty GOG
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Sublet Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Sublet
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Warranty Repair Order Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Warranty Reapir
//                         Order Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Parts Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Parts
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Labor Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Labor
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Miscellaneous Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal
//                         Miscellaneous Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal GOG Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal GOG
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Sublet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Sublet
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Repair Order Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Repair
//                         Order Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Parts Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Parts
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Labor Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Labor
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Miscellaneous Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal
//                         Miscellaneous Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal GOG Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal GOG
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Sublet Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Sublet
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Internal Repair Order Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Internal Repair
//                         Order Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Parts Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Parts Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Labor Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Labor Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Miscellaneous Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Miscellaneous Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order GOG Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order GOG
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Sublet Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Sublet Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Parts Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Parts Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Labor Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Labor Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Miscellaneous Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Misccellaneous Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order GOG Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order GOG
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Sublet Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Sublet Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order
//                         Cost </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Total Repair Order Tax Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Total Repair Order Tax
//                         Price </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Operation Parts Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Operation Parts Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Operation Parts Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Operation Parts Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Operation Total Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Operation Total Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Operation Total Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Operation Total Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Unit Core Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Unit Core Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Unit Core Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Unit Core Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Unit List Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Unit List Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net List Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net List Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Core Cost">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Core Cost
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Core Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Core Price
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Miscellaneous">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Miscellaneous
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Freight">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Freight
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Restock">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Restock
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Net Total">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/"> Net Total
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Vehicle Advertised Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">
//                         Dealer advertised price for a vehicle.
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Vehicle Selling Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">
//                         Dealer offer price for known customers (i.e., logged in customers).
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DIO Invoice Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">
//                         Dealer Invoice cost of dealer installed option (DIO).
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DIO Retail Price">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">
//                         Dealer suggested retail price of dealer installed option (DIO).
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IVehicleUseEnumeratedType {
//     <xsd:simpleType name="VehicleUseEnumeratedType">
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Demonstration">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Vehicle was used as demonstration model.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Daily Rental">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Used as a rental or loaner car.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Personal">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Used for personal or individual use.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Household">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Used for family or house hold purposes.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Other">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Other or unknown use.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Not Applicable">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Not applicable.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Taxi">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Taxi</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Lease">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Lease</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Agri/Farm">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Agriculture/Farming</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Beverage">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Beverage</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BusTrans">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Bus Transportation</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Constr">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Construction</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Dealer">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Dealer</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Emergency">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Emergency Vehicle</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Fin.Lease">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Leased-Financed</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FoodProc">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Food Processing</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ForestLum">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Forestry/Lumber</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GF/Haz">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Gen Freight-Hazardous</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GenFrt">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">General Freight</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Govt">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Government</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Hazard">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Hazardous</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Individ">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Individual</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Landsc">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Landscaping</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Manuf">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Manufacturing</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Mfg.Lease">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Leased-Manufacturing</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Min/Qua">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Mining</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Misc">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Miscellaneous</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Mnt.Lease">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Lease Rent</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Mov/Stor">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Moving/Storage</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Petro">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Petroleum</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Petro/Haz">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Petroleum-Hazardous</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Ref/Haz">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Spec-Hazardous</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Road/Hwy">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Road/Highway</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="San/Refuse">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Sanitation/Refuse</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Services">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Services</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SpecHaul">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Specialized Hauling</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Unknown">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Unknown</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Util/Haz">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Utility-Hazardous</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Utility">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Utility</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Veh.Trnsprtr">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Vehicle Transporter</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Wh/Retail">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Wholesale/Retail</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OffRoad">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Off-Road</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface ISaleClassEnumeratedType {
//     <xsd:simpleType name="SaleClassEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Class of sale.</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="New">
//             <xsd:annotation>
//                 <xsd:documentation>Never owned.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Used">
//             <xsd:annotation>
//                 <xsd:documentation>Previously Owned</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Demo">
//             <xsd:annotation>
//                 <xsd:documentation>Demonstration item.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Other">
//             <xsd:annotation>
//                 <xsd:documentation>Other</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="N/A">
//             <xsd:annotation>
//                 <xsd:documentation>Not Applicable</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Floor Sample">
//             <xsd:annotation>
//                 <xsd:documentation>This is a vehicle that is provided in the showroom as an example.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Factory">
//             <xsd:annotation>
//                 <xsd:documentation>Identifies that the vehicle may have been used as a product demonstration for an official or executive from the manufacturer.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Non-Current">
//             <xsd:annotation>
//                 <xsd:documentation>Brand new item but not the current year.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Scratch and Dent">
//             <xsd:annotation>
//                 <xsd:documentation>New item but has defects.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Trade In">
//             <xsd:annotation>
//                 <xsd:documentation>Used item but traded in.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Purchase">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Indicates the vehicle is to be purchased or has been purchased.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Lease">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Indicates the vehicle is to be leased or has been leased.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Current Model">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Indicates that the data is a "spec" for a current year boat Model, i.e. not an actual boat</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Non Current Model">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">Indicates that the data is a "spec" for a non current year boat Model, i.e. not an actual boat</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Certified Pre-Owned">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/STAR/5">
//                         Certified Pre-Owned
//                     </xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IBoatEngineTypeEnumeratedType {
//     <xsd:simpleType name="BoatEngineTypeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Type of engine on or for a boat.</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Inboard">
//             <xsd:annotation>
//                 <xsd:documentation>Inboard</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Inboard/Outboard">
//             <xsd:annotation>
//                 <xsd:documentation>Inboard/Outboard</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Jet">
//             <xsd:annotation>
//                 <xsd:documentation>Jet</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Outboard">
//             <xsd:annotation>
//                 <xsd:documentation>Outboard</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Outboard 2 Stroke">
//             <xsd:annotation>
//                 <xsd:documentation>Outboard 2 Stroke</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Outboard 4 Stroke">
//             <xsd:annotation>
//                 <xsd:documentation>Outboard 4 Stroke</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Stern Drive">
//             <xsd:annotation>
//                 <xsd:documentation>Stern Drive</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="V Drive">
//             <xsd:annotation>
//                 <xsd:documentation>V Drive</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Electric">
//             <xsd:annotation>
//                 <xsd:documentation>Electric</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Other">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">A engine type that is not listed in the standard code list.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface ICylinderConfigurationEnumeratedType {
//     <xsd:simpleType name="CylinderConfigurationEnumeratedType">
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Inline">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Inline</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="V">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">V</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Rotary">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Rotary</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IStartingSystemTypeEnumeratedType {
//     <xsd:simpleType name="StartingSystemTypeEnumeratedType">
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Electric">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Electric engine starting system</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Manual">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Pull engine starting system</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Other">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Other engine starting system</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IColorItemEnumeratedType {
//     <xsd:simpleType name="ColorItemEnumeratedType">
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Hull">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Hull</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Engine">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Engine</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Deck">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Deck</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Seat">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Seat</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Carpet">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Carpet</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Interior">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Interior</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Exterior">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Exterior</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ExteriorSecondary">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Some vehicles have a two tone paint scheme on the exterior</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Trailer">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Trailer</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Top">
//             <xsd:annotation>
//                 <xsd:documentation source="http://www.starstandard.org/">Top</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface ITransmissionTypeEnumeratedType {
//     <xsd:simpleType name="TransmissionTypeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Vehicle Transmission type - 3 = 3 speed, 4 = 4 speed, 5 = 5 speed, 6 = 6 speed, A - Automatic</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="3">
//             <xsd:annotation>
//                 <xsd:documentation>3 Speed</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="4">
//             <xsd:annotation>
//                 <xsd:documentation>4 Speed</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="5">
//             <xsd:annotation>
//                 <xsd:documentation>5 Speed</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="6">
//             <xsd:annotation>
//                 <xsd:documentation>6 Speed</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="A">
//             <xsd:annotation>
//                 <xsd:documentation>Automatic</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Automatic 3">
//             <xsd:annotation>
//                 <xsd:documentation>Automatic 3 speed transmission type</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Automatic 4">
//             <xsd:annotation>
//                 <xsd:documentation>Automatic 4 speed transmission type</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Automatic 5">
//             <xsd:annotation>
//                 <xsd:documentation>Automatic 5 speed transmission type</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Automatic 6">
//             <xsd:annotation>
//                 <xsd:documentation>Automatic 6 speed transmission type</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Automatic 7">
//             <xsd:annotation>
//                 <xsd:documentation>Automatic 7 speed transmission type</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="7">
//             <xsd:annotation>
//                 <xsd:documentation>7 Speed</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CVT Automatic 3">
//             <xsd:annotation>
//                 <xsd:documentation>Continuously Variable T ransmission Automatic 3 speed transmission type (natural gas and hybrid).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CVT Automatic 4">
//             <xsd:annotation>
//                 <xsd:documentation>Continuously Variable T ransmission Automatic 4 speed transmission type (natural gas and hybrid).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CVT Automatic 5">
//             <xsd:annotation>
//                 <xsd:documentation>Continuously Variable T ransmission Automatic 5 speed transmission type (natural gas and hybrid).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CVT Automatic 6">
//             <xsd:annotation>
//                 <xsd:documentation>Continuously Variable T ransmission Automatic 6 speed transmission type (natural gas and hybrid).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CVT Automatic 7">
//             <xsd:annotation>
//                 <xsd:documentation>Continuously Variable T ransmission Automatic 7 speed transmission type (natural gas and hybrid).</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Manual">
//             <xsd:annotation>
//                 <xsd:documentation>Manual Transmission</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IDriveTypeEnumeratedType {
//     <xsd:simpleType name="DriveTypeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Designates vehicle drive type</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Front">
//             <xsd:annotation>
//                 <xsd:documentation>Front wheel drive</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Rear">
//             <xsd:annotation>
//                 <xsd:documentation>Rear wheel drive</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Stern">
//             <xsd:annotation>
//                 <xsd:documentation>The engine is located inboard just forward transom (sterm) and delivers power via a shaft that goes through the transom to the drive unit.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Sail">
//             <xsd:annotation>
//                 <xsd:documentation>An arrangement of an inboard motor that is about a sailboat's equivalent of a motorboat's stern drive. The difference is the motor sticks out of the bottom of the hull of the boat, instead of from the stern.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="V">
//             <xsd:annotation>
//                 <xsd:documentation>Consists of two drive shafts, a gearbox, and a propeller. In these types of "V-drive" boats the engine is mounted in the rear of the boat and the front of the engine faces aft. Connected to the rear of the engine is the transmission and out of the transmission comes the first of the two drive shafts. This drive shaft connects to the rear of the transmission and to the gearbox which is mounted in the center of the boat. Then out of the gearbox comes the second drive shaft which extends to the rear and out the bottom of the boat which gives this propulsion system it's V configuration. At the end of the second drive shaft the propeller is mounted.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Jet">
//             <xsd:annotation>
//                 <xsd:documentation>Unlike a powerboat or motorboat that uses a propeller in the water below or behind the boat, a jet drive draws the water from under the boat into a pump-jet inside the boat, then expels it through a nozzle at the stern.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Direct">
//             <xsd:annotation>
//                 <xsd:documentation>Configuration where a drive shaft is used to connect the transmission to the propeller.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Surface">
//             <xsd:annotation>
//                 <xsd:documentation>Engine(s) located aft or amidships, mated to a transmission with an output shaft passing through the transom to a non-steering outdrive that locates the propeller near the water surface. Usually associated with high-performance boats and yachts.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Air Propeller">
//             <xsd:annotation>
//                 <xsd:documentation>Engine drives a propeller spinning in the air to create thrust to move the craft forward. Used on hovercraft and air boats.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Pod">
//             <xsd:annotation>
//                 <xsd:documentation>Engines located amidships and mated to pivoting drive units located below the hull that steer the boat by changing the direction of propeller thrust.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Other">
//             <xsd:annotation>
//                 <xsd:documentation>Other drive type not available in the list.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IMaritalStatusEnumeratedType {
//     <xsd:simpleType name="MaritalStatusEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Identifies marital status of business party - M = Married, U = Unmarried, S = Separated, O = Other</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="M">
//             <xsd:annotation>
//                 <xsd:documentation>Married</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="U">
//             <xsd:annotation>
//                 <xsd:documentation>Unmarried</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="S">
//             <xsd:annotation>
//                 <xsd:documentation>Separated</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="O">
//             <xsd:annotation>
//                 <xsd:documentation>Other</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IGenderEnumeratedType {
//     <xsd:simpleType name="GenderEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Gender of party - M = Male, F= Female</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="M">
//             <xsd:annotation>
//                 <xsd:documentation>Male</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="F">
//             <xsd:annotation>
//                 <xsd:documentation>Female</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="N">
//             <xsd:annotation>
//                 <xsd:documentation>Neuter</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="O">
//             <xsd:annotation>
//                 <xsd:documentation>Other</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface ITransactionTypeEnumeratedType {
//     <xsd:simpleType name="TransactionTypeEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Type of transaction</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="Initial">
//             <xsd:annotation>
//                 <xsd:documentation>Initial transaction</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Update">
//             <xsd:annotation>
//                 <xsd:documentation>Update transaction</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Delete">
//             <xsd:annotation>
//                 <xsd:documentation>Delete transaction</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Cancel">
//             <xsd:annotation>
//                 <xsd:documentation>Cancel transaction</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface ICountryEnumeratedType {
//     <xsd:simpleType name="CountryEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandards.org">Country in which the Address is in. Conforms to ISO 3166-2 Alpha-2 and Alpha-3 codes.
//             </xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="US">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED STATES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AF">
//             <xsd:annotation>
//                 <xsd:documentation>AFGHANISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AL">
//             <xsd:annotation>
//                 <xsd:documentation>ALBANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DZ">
//             <xsd:annotation>
//                 <xsd:documentation>ALGERIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AS">
//             <xsd:annotation>
//                 <xsd:documentation>AMERICAN SAMOA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AD">
//             <xsd:annotation>
//                 <xsd:documentation>ANDORRA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AO">
//             <xsd:annotation>
//                 <xsd:documentation>ANGOLA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AI">
//             <xsd:annotation>
//                 <xsd:documentation>ANGUILLA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AQ">
//             <xsd:annotation>
//                 <xsd:documentation>ANTARCTICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AG">
//             <xsd:annotation>
//                 <xsd:documentation>ANTIGUA AND BARBUDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AR">
//             <xsd:annotation>
//                 <xsd:documentation>ARGENTINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AM">
//             <xsd:annotation>
//                 <xsd:documentation>ARMENIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AW">
//             <xsd:annotation>
//                 <xsd:documentation>ARUBA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AU">
//             <xsd:annotation>
//                 <xsd:documentation>AUSTRALIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AT">
//             <xsd:annotation>
//                 <xsd:documentation>AUSTRIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AZ">
//             <xsd:annotation>
//                 <xsd:documentation>AZERBAIJAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BS">
//             <xsd:annotation>
//                 <xsd:documentation>BAHAMAS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BH">
//             <xsd:annotation>
//                 <xsd:documentation>BAHRAIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BD">
//             <xsd:annotation>
//                 <xsd:documentation>BANGLADESH</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BB">
//             <xsd:annotation>
//                 <xsd:documentation>BARBADOS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BY">
//             <xsd:annotation>
//                 <xsd:documentation>BELARUS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BE">
//             <xsd:annotation>
//                 <xsd:documentation>BELGIUM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BZ">
//             <xsd:annotation>
//                 <xsd:documentation>BELIZE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BJ">
//             <xsd:annotation>
//                 <xsd:documentation>BENIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BM">
//             <xsd:annotation>
//                 <xsd:documentation>BERMUDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BT">
//             <xsd:annotation>
//                 <xsd:documentation>BHUTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BO">
//             <xsd:annotation>
//                 <xsd:documentation>BOLIVIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BA">
//             <xsd:annotation>
//                 <xsd:documentation>BOSNIA AND HERZEGOVINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BW">
//             <xsd:annotation>
//                 <xsd:documentation>BOTSWANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BV">
//             <xsd:annotation>
//                 <xsd:documentation>BOUVET ISLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BR">
//             <xsd:annotation>
//                 <xsd:documentation>BRAZIL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IO">
//             <xsd:annotation>
//                 <xsd:documentation>BRITISH INDIAN OCEAN TERRITORY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BN">
//             <xsd:annotation>
//                 <xsd:documentation>BRUNEI DARUSSALAM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BG">
//             <xsd:annotation>
//                 <xsd:documentation>BULGARIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BF">
//             <xsd:annotation>
//                 <xsd:documentation>BURKINA FASO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BI">
//             <xsd:annotation>
//                 <xsd:documentation>BURUNDI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KH">
//             <xsd:annotation>
//                 <xsd:documentation>CAMBODIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CM">
//             <xsd:annotation>
//                 <xsd:documentation>CAMEROON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CA">
//             <xsd:annotation>
//                 <xsd:documentation>CANADA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CV">
//             <xsd:annotation>
//                 <xsd:documentation>CAPE VERDE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CW">
//             <xsd:annotation>
//                 <xsd:documentation>CURACAO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KY">
//             <xsd:annotation>
//                 <xsd:documentation>CAYMAN ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CF">
//             <xsd:annotation>
//                 <xsd:documentation>CENTRAL AFRICAN REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TD">
//             <xsd:annotation>
//                 <xsd:documentation>CHAD</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CL">
//             <xsd:annotation>
//                 <xsd:documentation>CHILE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CN">
//             <xsd:annotation>
//                 <xsd:documentation>CHINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CX">
//             <xsd:annotation>
//                 <xsd:documentation>CHRISTMAS ISLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CC">
//             <xsd:annotation>
//                 <xsd:documentation>COCOS (KEELING) ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CO">
//             <xsd:annotation>
//                 <xsd:documentation>COLOMBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KM">
//             <xsd:annotation>
//                 <xsd:documentation>COMOROS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CG">
//             <xsd:annotation>
//                 <xsd:documentation>CONGO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CD">
//             <xsd:annotation>
//                 <xsd:documentation>CONGO, THE DEMOCRATIC REPUBLIC OF THE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CK">
//             <xsd:annotation>
//                 <xsd:documentation>COOK ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CR">
//             <xsd:annotation>
//                 <xsd:documentation>COSTA RICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CI">
//             <xsd:annotation>
//                 <xsd:documentation>COTE D'IVOIRE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HR">
//             <xsd:annotation>
//                 <xsd:documentation>CROATIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CU">
//             <xsd:annotation>
//                 <xsd:documentation>CUBA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CY">
//             <xsd:annotation>
//                 <xsd:documentation>CYPRUS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CZ">
//             <xsd:annotation>
//                 <xsd:documentation>CZECH REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DK">
//             <xsd:annotation>
//                 <xsd:documentation>DENMARK</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DJ">
//             <xsd:annotation>
//                 <xsd:documentation>DJIBOUTI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DM">
//             <xsd:annotation>
//                 <xsd:documentation>DOMINICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DO">
//             <xsd:annotation>
//                 <xsd:documentation>DOMINICAN REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EC">
//             <xsd:annotation>
//                 <xsd:documentation>ECUADOR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EG">
//             <xsd:annotation>
//                 <xsd:documentation>EGYPT</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SV">
//             <xsd:annotation>
//                 <xsd:documentation>EL SALVADOR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GQ">
//             <xsd:annotation>
//                 <xsd:documentation>EQUATORIAL GUINEA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ER">
//             <xsd:annotation>
//                 <xsd:documentation>ERITREA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EE">
//             <xsd:annotation>
//                 <xsd:documentation>ESTONIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ET">
//             <xsd:annotation>
//                 <xsd:documentation>ETHIOPIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FK">
//             <xsd:annotation>
//                 <xsd:documentation>FALKLAND ISLANDS (MALVINAS)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FO">
//             <xsd:annotation>
//                 <xsd:documentation>FAROE ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FJ">
//             <xsd:annotation>
//                 <xsd:documentation>FIJI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FI">
//             <xsd:annotation>
//                 <xsd:documentation>FINLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FR">
//             <xsd:annotation>
//                 <xsd:documentation>FRANCE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GF">
//             <xsd:annotation>
//                 <xsd:documentation>FRENCH GUIANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PF">
//             <xsd:annotation>
//                 <xsd:documentation>FRENCH POLYNESIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TF">
//             <xsd:annotation>
//                 <xsd:documentation>FRENCH SOUTHERN TERRITORIES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GA">
//             <xsd:annotation>
//                 <xsd:documentation>GABON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GM">
//             <xsd:annotation>
//                 <xsd:documentation>GAMBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GE">
//             <xsd:annotation>
//                 <xsd:documentation>GEORGIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DE">
//             <xsd:annotation>
//                 <xsd:documentation>GERMANY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GH">
//             <xsd:annotation>
//                 <xsd:documentation>GHANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GI">
//             <xsd:annotation>
//                 <xsd:documentation>GIBRALTAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GR">
//             <xsd:annotation>
//                 <xsd:documentation>GREECE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GL">
//             <xsd:annotation>
//                 <xsd:documentation>GREENLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GD">
//             <xsd:annotation>
//                 <xsd:documentation>GRENADA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GP">
//             <xsd:annotation>
//                 <xsd:documentation>GUADELOUPE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GU">
//             <xsd:annotation>
//                 <xsd:documentation>GUAM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GT">
//             <xsd:annotation>
//                 <xsd:documentation>GUATEMALA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GN">
//             <xsd:annotation>
//                 <xsd:documentation>GUINEA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GW">
//             <xsd:annotation>
//                 <xsd:documentation>GUINEA-BISSAU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GY">
//             <xsd:annotation>
//                 <xsd:documentation>GUYANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HT">
//             <xsd:annotation>
//                 <xsd:documentation>HAITI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HM">
//             <xsd:annotation>
//                 <xsd:documentation>HEARD ISLAND AND MCDONALD ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VA">
//             <xsd:annotation>
//                 <xsd:documentation>HOLY SEE (VATICAN CITY STATE)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HN">
//             <xsd:annotation>
//                 <xsd:documentation>HONDURAS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HK">
//             <xsd:annotation>
//                 <xsd:documentation>HONG KONG</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HU">
//             <xsd:annotation>
//                 <xsd:documentation>HUNGARY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IS">
//             <xsd:annotation>
//                 <xsd:documentation>ICELAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IN">
//             <xsd:annotation>
//                 <xsd:documentation>INDIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ID">
//             <xsd:annotation>
//                 <xsd:documentation>INDONESIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IR">
//             <xsd:annotation>
//                 <xsd:documentation>IRAN, ISLAMIC REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IQ">
//             <xsd:annotation>
//                 <xsd:documentation>IRAQ</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IE">
//             <xsd:annotation>
//                 <xsd:documentation>IRELAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IL">
//             <xsd:annotation>
//                 <xsd:documentation>ISRAEL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IT">
//             <xsd:annotation>
//                 <xsd:documentation>ITALY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JM">
//             <xsd:annotation>
//                 <xsd:documentation>JAMAICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JP">
//             <xsd:annotation>
//                 <xsd:documentation>JAPAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JO">
//             <xsd:annotation>
//                 <xsd:documentation>JORDAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KZ">
//             <xsd:annotation>
//                 <xsd:documentation>KAZAKHSTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KE">
//             <xsd:annotation>
//                 <xsd:documentation>KENYA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KI">
//             <xsd:annotation>
//                 <xsd:documentation>KIRIBATI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KP">
//             <xsd:annotation>
//                 <xsd:documentation>KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KR">
//             <xsd:annotation>
//                 <xsd:documentation>KOREA, REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KW">
//             <xsd:annotation>
//                 <xsd:documentation>KUWAIT</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KG">
//             <xsd:annotation>
//                 <xsd:documentation>KYRGYZSTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LA">
//             <xsd:annotation>
//                 <xsd:documentation>LAO PEOPLE'S DEMOCRATIC REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LV">
//             <xsd:annotation>
//                 <xsd:documentation>LATVIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LB">
//             <xsd:annotation>
//                 <xsd:documentation>LEBANON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LS">
//             <xsd:annotation>
//                 <xsd:documentation>LESOTHO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LR">
//             <xsd:annotation>
//                 <xsd:documentation>LIBERIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LY">
//             <xsd:annotation>
//                 <xsd:documentation>LIBYAN ARAB JAMAHIRIYA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LI">
//             <xsd:annotation>
//                 <xsd:documentation>LIECHTENSTEIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LT">
//             <xsd:annotation>
//                 <xsd:documentation>LITHUANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LU">
//             <xsd:annotation>
//                 <xsd:documentation>LUXEMBOURG</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MO">
//             <xsd:annotation>
//                 <xsd:documentation>MACAO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MK">
//             <xsd:annotation>
//                 <xsd:documentation>MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MG">
//             <xsd:annotation>
//                 <xsd:documentation>MADAGASCAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MW">
//             <xsd:annotation>
//                 <xsd:documentation>MALAWI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MY">
//             <xsd:annotation>
//                 <xsd:documentation>MALAYSIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MV">
//             <xsd:annotation>
//                 <xsd:documentation>MALDIVES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ML">
//             <xsd:annotation>
//                 <xsd:documentation>MALI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MT">
//             <xsd:annotation>
//                 <xsd:documentation>MALTA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MH">
//             <xsd:annotation>
//                 <xsd:documentation>MARSHALL ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MQ">
//             <xsd:annotation>
//                 <xsd:documentation>MARTINIQUE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MR">
//             <xsd:annotation>
//                 <xsd:documentation>MAURITANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MU">
//             <xsd:annotation>
//                 <xsd:documentation>MAURITIUS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="YT">
//             <xsd:annotation>
//                 <xsd:documentation>MAYOTTE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MX">
//             <xsd:annotation>
//                 <xsd:documentation>MEXICO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FM">
//             <xsd:annotation>
//                 <xsd:documentation>MICRONESIA, FEDERATED STATES OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MD">
//             <xsd:annotation>
//                 <xsd:documentation>MOLDOVA, REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MC">
//             <xsd:annotation>
//                 <xsd:documentation>MONACO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MN">
//             <xsd:annotation>
//                 <xsd:documentation>MONGOLIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MS">
//             <xsd:annotation>
//                 <xsd:documentation>MONTSERRAT</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MA">
//             <xsd:annotation>
//                 <xsd:documentation>MOROCCO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MZ">
//             <xsd:annotation>
//                 <xsd:documentation>MOZAMBIQUE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MM">
//             <xsd:annotation>
//                 <xsd:documentation>MYANMAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NA">
//             <xsd:annotation>
//                 <xsd:documentation>NAMIBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NR">
//             <xsd:annotation>
//                 <xsd:documentation>NAURU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NP">
//             <xsd:annotation>
//                 <xsd:documentation>NEPAL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NL">
//             <xsd:annotation>
//                 <xsd:documentation>NETHERLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AN">
//             <xsd:annotation>
//                 <xsd:documentation>NETHERLANDS ANTILLES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NC">
//             <xsd:annotation>
//                 <xsd:documentation>NEW CALEDONIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NZ">
//             <xsd:annotation>
//                 <xsd:documentation>NEW ZEALAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NI">
//             <xsd:annotation>
//                 <xsd:documentation>NICARAGUA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NE">
//             <xsd:annotation>
//                 <xsd:documentation>NIGER</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NG">
//             <xsd:annotation>
//                 <xsd:documentation>NIGERIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NU">
//             <xsd:annotation>
//                 <xsd:documentation>NIUE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NF">
//             <xsd:annotation>
//                 <xsd:documentation>NORFOLK ISLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MP">
//             <xsd:annotation>
//                 <xsd:documentation>NORTHERN MARIANA ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NO">
//             <xsd:annotation>
//                 <xsd:documentation>NORWAY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OM">
//             <xsd:annotation>
//                 <xsd:documentation>OMAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PK">
//             <xsd:annotation>
//                 <xsd:documentation>PAKISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PW">
//             <xsd:annotation>
//                 <xsd:documentation>PALAU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PS">
//             <xsd:annotation>
//                 <xsd:documentation>PALESTINIAN TERRITORY, OCCUPIED</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PA">
//             <xsd:annotation>
//                 <xsd:documentation>PANAMA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PG">
//             <xsd:annotation>
//                 <xsd:documentation>PAPUA NEW GUINEA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PY">
//             <xsd:annotation>
//                 <xsd:documentation>PARAGUAY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PE">
//             <xsd:annotation>
//                 <xsd:documentation>PERU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PH">
//             <xsd:annotation>
//                 <xsd:documentation>PHILIPPINES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PN">
//             <xsd:annotation>
//                 <xsd:documentation>PITCAIRN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PL">
//             <xsd:annotation>
//                 <xsd:documentation>POLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PT">
//             <xsd:annotation>
//                 <xsd:documentation>PORTUGAL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PR">
//             <xsd:annotation>
//                 <xsd:documentation>PUERTO RICO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="QA">
//             <xsd:annotation>
//                 <xsd:documentation>QATAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RE">
//             <xsd:annotation>
//                 <xsd:documentation>"REUNION"</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RO">
//             <xsd:annotation>
//                 <xsd:documentation>ROMANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RU">
//             <xsd:annotation>
//                 <xsd:documentation>RUSSIAN FEDERATION</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RW">
//             <xsd:annotation>
//                 <xsd:documentation>RWANDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SH">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT HELENA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KN">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT KITTS AND NEVIS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LC">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT LUCIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PM">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT PIERRA AND MIQUELON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VC">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT VINCENT AND THE GRENADINES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="WS">
//             <xsd:annotation>
//                 <xsd:documentation>SAMOA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SM">
//             <xsd:annotation>
//                 <xsd:documentation>SAN MARINO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SS">
//             <xsd:annotation>
//                 <xsd:documentation>SOUTH SUDAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ST">
//             <xsd:annotation>
//                 <xsd:documentation>SAO TOME AND PRINCIPE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SA">
//             <xsd:annotation>
//                 <xsd:documentation>SAUDI ARABIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SN">
//             <xsd:annotation>
//                 <xsd:documentation>SENEGAL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SX">
//             <xsd:annotation>
//                 <xsd:documentation>SINT MAARTEN(DUTCH PART)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CS">
//             <xsd:annotation>
//                 <xsd:documentation>Deprecated: Use RS for Serbia or ME for Montenegro.</xsd:documentation>
//                 <xsd:documentation>SERBIA AND MONTENEGRO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SC">
//             <xsd:annotation>
//                 <xsd:documentation>SEYCHELLES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SL">
//             <xsd:annotation>
//                 <xsd:documentation>SIERRA LEONE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SG">
//             <xsd:annotation>
//                 <xsd:documentation>SINGAPORE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SK">
//             <xsd:annotation>
//                 <xsd:documentation>SLOVAKIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SI">
//             <xsd:annotation>
//                 <xsd:documentation>SLOVENIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SB">
//             <xsd:annotation>
//                 <xsd:documentation>SOLOMON ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SO">
//             <xsd:annotation>
//                 <xsd:documentation>SOMALIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ZA">
//             <xsd:annotation>
//                 <xsd:documentation>SOUTH AFRICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GS">
//             <xsd:annotation>
//                 <xsd:documentation>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ES">
//             <xsd:annotation>
//                 <xsd:documentation>SPAIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LK">
//             <xsd:annotation>
//                 <xsd:documentation>SRI LANKA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SD">
//             <xsd:annotation>
//                 <xsd:documentation>SUDAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SR">
//             <xsd:annotation>
//                 <xsd:documentation>SURINAME</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SJ">
//             <xsd:annotation>
//                 <xsd:documentation>SVALBARD AND JAN MAYEN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SZ">
//             <xsd:annotation>
//                 <xsd:documentation>SWAZILAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SE">
//             <xsd:annotation>
//                 <xsd:documentation>SWEDEN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CH">
//             <xsd:annotation>
//                 <xsd:documentation>SWITZERLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SY">
//             <xsd:annotation>
//                 <xsd:documentation>SYRIAN ARAB REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TW">
//             <xsd:annotation>
//                 <xsd:documentation>TIAWAN, PROVINCE OF CHINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TJ">
//             <xsd:annotation>
//                 <xsd:documentation>TAJIKISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TZ">
//             <xsd:annotation>
//                 <xsd:documentation />
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TH">
//             <xsd:annotation>
//                 <xsd:documentation>THAILAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TL">
//             <xsd:annotation>
//                 <xsd:documentation>TIMOR-LESTE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TG">
//             <xsd:annotation>
//                 <xsd:documentation>TOGO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TK">
//             <xsd:annotation>
//                 <xsd:documentation>TOKELAU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TO">
//             <xsd:annotation>
//                 <xsd:documentation>TONGA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TT">
//             <xsd:annotation>
//                 <xsd:documentation>TRINIDAD AND TOBAGO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TN">
//             <xsd:annotation>
//                 <xsd:documentation>TUNISIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TR">
//             <xsd:annotation>
//                 <xsd:documentation>TURKEY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TM">
//             <xsd:annotation>
//                 <xsd:documentation>TURKMENISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TC">
//             <xsd:annotation>
//                 <xsd:documentation>TURKS AND CAICOS ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TV">
//             <xsd:annotation>
//                 <xsd:documentation>TUVALU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UG">
//             <xsd:annotation>
//                 <xsd:documentation>UGANDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UA">
//             <xsd:annotation>
//                 <xsd:documentation>UKRAINE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AE">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED ARAB EMIRATES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GB">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED KINGDOM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UM">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED STATES MINOR OUTLYING ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UY">
//             <xsd:annotation>
//                 <xsd:documentation>URUGUAY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UZ">
//             <xsd:annotation>
//                 <xsd:documentation>UZBEKISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VU">
//             <xsd:annotation>
//                 <xsd:documentation>VANUATU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VE">
//             <xsd:annotation>
//                 <xsd:documentation>VENEZUELA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VN">
//             <xsd:annotation>
//                 <xsd:documentation>VIET NAM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VG">
//             <xsd:annotation>
//                 <xsd:documentation>VIRGIN ISLANDS, BRITISH</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VI">
//             <xsd:annotation>
//                 <xsd:documentation>VIRGIN ISLANDS, U.S.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="WF">
//             <xsd:annotation>
//                 <xsd:documentation>WALLIS AND FUTUNA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EH">
//             <xsd:annotation>
//                 <xsd:documentation>WESTERN SAHARA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="YE">
//             <xsd:annotation>
//                 <xsd:documentation>YEMEN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ZM">
//             <xsd:annotation>
//                 <xsd:documentation>ZAMBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ZW">
//             <xsd:annotation>
//                 <xsd:documentation>ZIMBABWE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GG">
//             <xsd:annotation>
//                 <xsd:documentation>GUERNSEY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IM">
//             <xsd:annotation>
//                 <xsd:documentation>ISLE OF MILAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RS">
//             <xsd:annotation>
//                 <xsd:documentation>SERBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MF">
//             <xsd:annotation>
//                 <xsd:documentation>ST. MAARTEN/ST. MARTIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AX">
//             <xsd:annotation>
//                 <xsd:documentation>ALAND ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BL">
//             <xsd:annotation>
//                 <xsd:documentation>ST. BARTHILEMY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ME">
//             <xsd:annotation>
//                 <xsd:documentation>MONTENEGRO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JE">
//             <xsd:annotation>
//                 <xsd:documentation>JERSEY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="USA">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED STATES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AFG">
//             <xsd:annotation>
//                 <xsd:documentation>AFGHANISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ALB">
//             <xsd:annotation>
//                 <xsd:documentation>ALBANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DZA">
//             <xsd:annotation>
//                 <xsd:documentation>ALGERIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ASM">
//             <xsd:annotation>
//                 <xsd:documentation>AMERICAN SAMOA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AND">
//             <xsd:annotation>
//                 <xsd:documentation>ANDORRA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AGO">
//             <xsd:annotation>
//                 <xsd:documentation>ANGOLA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AIA">
//             <xsd:annotation>
//                 <xsd:documentation>ANGUILLA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ATA">
//             <xsd:annotation>
//                 <xsd:documentation>ANTARCTICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ATG">
//             <xsd:annotation>
//                 <xsd:documentation>ANTIGUA AND BARBUDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ARG">
//             <xsd:annotation>
//                 <xsd:documentation>ARGENTINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ARM">
//             <xsd:annotation>
//                 <xsd:documentation>ARMENIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ABW">
//             <xsd:annotation>
//                 <xsd:documentation>ARUBA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AUS">
//             <xsd:annotation>
//                 <xsd:documentation>AUSTRALIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AUT">
//             <xsd:annotation>
//                 <xsd:documentation>AUSTRIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="AZE">
//             <xsd:annotation>
//                 <xsd:documentation>AZERBAIJAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BHS">
//             <xsd:annotation>
//                 <xsd:documentation>BAHAMAS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BHR">
//             <xsd:annotation>
//                 <xsd:documentation>BAHRAIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BGD">
//             <xsd:annotation>
//                 <xsd:documentation>BANGLADESH</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BRB">
//             <xsd:annotation>
//                 <xsd:documentation>BARBADOS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BLR">
//             <xsd:annotation>
//                 <xsd:documentation>BELARUS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BEL">
//             <xsd:annotation>
//                 <xsd:documentation>BELGIUM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BLZ">
//             <xsd:annotation>
//                 <xsd:documentation>BELIZE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BEN">
//             <xsd:annotation>
//                 <xsd:documentation>BENIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BMU">
//             <xsd:annotation>
//                 <xsd:documentation>BERMUDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BTN">
//             <xsd:annotation>
//                 <xsd:documentation>BHUTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BOL">
//             <xsd:annotation>
//                 <xsd:documentation>BOLIVIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BIH">
//             <xsd:annotation>
//                 <xsd:documentation>BOSNIA AND HERZEGOVINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BWA">
//             <xsd:annotation>
//                 <xsd:documentation>BOTSWANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BVT">
//             <xsd:annotation>
//                 <xsd:documentation>BOUVET ISLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BRA">
//             <xsd:annotation>
//                 <xsd:documentation>BRAZIL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IOT">
//             <xsd:annotation>
//                 <xsd:documentation>BRITISH INDIAN OCEAN TERRITORY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BRN">
//             <xsd:annotation>
//                 <xsd:documentation>BRUNEI DARUSSALAM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BGR">
//             <xsd:annotation>
//                 <xsd:documentation>BULGARIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BFA">
//             <xsd:annotation>
//                 <xsd:documentation>BURKINA FASO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BDI">
//             <xsd:annotation>
//                 <xsd:documentation>BURUNDI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KHM">
//             <xsd:annotation>
//                 <xsd:documentation>CAMBODIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CMR">
//             <xsd:annotation>
//                 <xsd:documentation>CAMEROON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CAN">
//             <xsd:annotation>
//                 <xsd:documentation>CANADA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CPV">
//             <xsd:annotation>
//                 <xsd:documentation>CAPE VERDE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CUW">
//             <xsd:annotation>
//                 <xsd:documentation>CURACAO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CYM">
//             <xsd:annotation>
//                 <xsd:documentation>CAYMAN ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CAF">
//             <xsd:annotation>
//                 <xsd:documentation>CENTRAL AFRICAN REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TCD">
//             <xsd:annotation>
//                 <xsd:documentation>CHAD</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CHL">
//             <xsd:annotation>
//                 <xsd:documentation>CHILE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CHN">
//             <xsd:annotation>
//                 <xsd:documentation>CHINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CXR">
//             <xsd:annotation>
//                 <xsd:documentation>CHRISTMAS ISLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CCK">
//             <xsd:annotation>
//                 <xsd:documentation>COCOS (KEELING) ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="COL">
//             <xsd:annotation>
//                 <xsd:documentation>COLOMBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="COM">
//             <xsd:annotation>
//                 <xsd:documentation>COMOROS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="COG">
//             <xsd:annotation>
//                 <xsd:documentation>CONGO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="COD">
//             <xsd:annotation>
//                 <xsd:documentation>CONGO, THE DEMOCRATIC REPUBLIC OF THE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="COK">
//             <xsd:annotation>
//                 <xsd:documentation>COOK ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CRI">
//             <xsd:annotation>
//                 <xsd:documentation>COSTA RICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CIV">
//             <xsd:annotation>
//                 <xsd:documentation>COTE D'IVOIRE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HRV">
//             <xsd:annotation>
//                 <xsd:documentation>CROATIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CUB">
//             <xsd:annotation>
//                 <xsd:documentation>CUBA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CYP">
//             <xsd:annotation>
//                 <xsd:documentation>CYPRUS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CZE">
//             <xsd:annotation>
//                 <xsd:documentation>CZECH REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DNK">
//             <xsd:annotation>
//                 <xsd:documentation>DENMARK</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DJI">
//             <xsd:annotation>
//                 <xsd:documentation>DJIBOUTI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DMA">
//             <xsd:annotation>
//                 <xsd:documentation>DOMINICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DOM">
//             <xsd:annotation>
//                 <xsd:documentation>DOMINICAN REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ECU">
//             <xsd:annotation>
//                 <xsd:documentation>ECUADOR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EGY">
//             <xsd:annotation>
//                 <xsd:documentation>EGYPT</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SLV">
//             <xsd:annotation>
//                 <xsd:documentation>EL SALVADOR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GNQ">
//             <xsd:annotation>
//                 <xsd:documentation>EQUATORIAL GUINEA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ERI">
//             <xsd:annotation>
//                 <xsd:documentation>ERITREA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="EST">
//             <xsd:annotation>
//                 <xsd:documentation>ESTONIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ETH">
//             <xsd:annotation>
//                 <xsd:documentation>ETHIOPIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FLK">
//             <xsd:annotation>
//                 <xsd:documentation>FALKLAND ISLANDS (MALVINAS)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FRO">
//             <xsd:annotation>
//                 <xsd:documentation>FAROE ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FJI">
//             <xsd:annotation>
//                 <xsd:documentation>FIJI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FIN">
//             <xsd:annotation>
//                 <xsd:documentation>FINLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FRA">
//             <xsd:annotation>
//                 <xsd:documentation>FRANCE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GUF">
//             <xsd:annotation>
//                 <xsd:documentation>FRENCH GUIANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PYF">
//             <xsd:annotation>
//                 <xsd:documentation>FRENCH POLYNESIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ATF">
//             <xsd:annotation>
//                 <xsd:documentation>FRENCH SOUTHERN TERRITORIES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GAB">
//             <xsd:annotation>
//                 <xsd:documentation>GABON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GMB">
//             <xsd:annotation>
//                 <xsd:documentation>GAMBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GEO">
//             <xsd:annotation>
//                 <xsd:documentation>GEORGIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="DEU">
//             <xsd:annotation>
//                 <xsd:documentation>GERMANY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GHA">
//             <xsd:annotation>
//                 <xsd:documentation>GHANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GIB">
//             <xsd:annotation>
//                 <xsd:documentation>GIBRALTAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GRC">
//             <xsd:annotation>
//                 <xsd:documentation>GREECE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GRL">
//             <xsd:annotation>
//                 <xsd:documentation>GREENLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GRD">
//             <xsd:annotation>
//                 <xsd:documentation>GRENADA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GLP">
//             <xsd:annotation>
//                 <xsd:documentation>GUADELOUPE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GUM">
//             <xsd:annotation>
//                 <xsd:documentation>GUAM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GTM">
//             <xsd:annotation>
//                 <xsd:documentation>GUATEMALA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GIN">
//             <xsd:annotation>
//                 <xsd:documentation>GUINEA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GNB">
//             <xsd:annotation>
//                 <xsd:documentation>GUINEA-BISSAU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GUY">
//             <xsd:annotation>
//                 <xsd:documentation>GUYANA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HTI">
//             <xsd:annotation>
//                 <xsd:documentation>HAITI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HMD">
//             <xsd:annotation>
//                 <xsd:documentation>HEARD ISLAND AND MCDONALD ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VAT">
//             <xsd:annotation>
//                 <xsd:documentation>HOLY SEE (VATICAN CITY STATE)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HND">
//             <xsd:annotation>
//                 <xsd:documentation>HONDURAS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HKG">
//             <xsd:annotation>
//                 <xsd:documentation>HONG KONG</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="HUN">
//             <xsd:annotation>
//                 <xsd:documentation>HUNGARY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ISL">
//             <xsd:annotation>
//                 <xsd:documentation>ICELAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IND">
//             <xsd:annotation>
//                 <xsd:documentation>INDIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IDN">
//             <xsd:annotation>
//                 <xsd:documentation>INDONESIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IRN">
//             <xsd:annotation>
//                 <xsd:documentation>IRAN, ISLAMIC REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IRQ">
//             <xsd:annotation>
//                 <xsd:documentation>IRAQ</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IRL">
//             <xsd:annotation>
//                 <xsd:documentation>IRELAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ISR">
//             <xsd:annotation>
//                 <xsd:documentation>ISRAEL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ITA">
//             <xsd:annotation>
//                 <xsd:documentation>ITALY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JAM">
//             <xsd:annotation>
//                 <xsd:documentation>JAMAICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JPN">
//             <xsd:annotation>
//                 <xsd:documentation>JAPAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JOR">
//             <xsd:annotation>
//                 <xsd:documentation>JORDAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KAZ">
//             <xsd:annotation>
//                 <xsd:documentation>KAZAKHSTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KEN">
//             <xsd:annotation>
//                 <xsd:documentation>KENYA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KIR">
//             <xsd:annotation>
//                 <xsd:documentation>KIRIBATI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PRK">
//             <xsd:annotation>
//                 <xsd:documentation>KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KOR">
//             <xsd:annotation>
//                 <xsd:documentation>KOREA, REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KWT">
//             <xsd:annotation>
//                 <xsd:documentation>KUWAIT</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KGZ">
//             <xsd:annotation>
//                 <xsd:documentation>KYRGYZSTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LAO">
//             <xsd:annotation>
//                 <xsd:documentation>LAO PEOPLE'S DEMOCRATIC REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LVA">
//             <xsd:annotation>
//                 <xsd:documentation>LATVIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LBN">
//             <xsd:annotation>
//                 <xsd:documentation>LEBANON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LSO">
//             <xsd:annotation>
//                 <xsd:documentation>LESOTHO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LBR">
//             <xsd:annotation>
//                 <xsd:documentation>LIBERIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LBY">
//             <xsd:annotation>
//                 <xsd:documentation>LIBYAN ARAB JAMAHIRIYA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LIE">
//             <xsd:annotation>
//                 <xsd:documentation>LIECHTENSTEIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LTU">
//             <xsd:annotation>
//                 <xsd:documentation>LITHUANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LUX">
//             <xsd:annotation>
//                 <xsd:documentation>LUXEMBOURG</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MAC">
//             <xsd:annotation>
//                 <xsd:documentation>MACAO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MKD">
//             <xsd:annotation>
//                 <xsd:documentation>MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MDG">
//             <xsd:annotation>
//                 <xsd:documentation>MADAGASCAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MWI">
//             <xsd:annotation>
//                 <xsd:documentation>MALAWI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MYS">
//             <xsd:annotation>
//                 <xsd:documentation>MALAYSIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MDV">
//             <xsd:annotation>
//                 <xsd:documentation>MALDIVES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MLI">
//             <xsd:annotation>
//                 <xsd:documentation>MALI</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MLT">
//             <xsd:annotation>
//                 <xsd:documentation>MALTA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MHL">
//             <xsd:annotation>
//                 <xsd:documentation>MARSHALL ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MTQ">
//             <xsd:annotation>
//                 <xsd:documentation>MARTINIQUE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MRR">
//             <xsd:annotation>
//                 <xsd:documentation>MAURITANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MUS">
//             <xsd:annotation>
//                 <xsd:documentation>MAURITIUS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MYT">
//             <xsd:annotation>
//                 <xsd:documentation>MAYOTTE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MEX">
//             <xsd:annotation>
//                 <xsd:documentation>MEXICO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="FSM">
//             <xsd:annotation>
//                 <xsd:documentation>MICRONESIA, FEDERATED STATES OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MDA">
//             <xsd:annotation>
//                 <xsd:documentation>MOLDOVA, REPUBLIC OF</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MCO">
//             <xsd:annotation>
//                 <xsd:documentation>MONACO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MNG">
//             <xsd:annotation>
//                 <xsd:documentation>MONGOLIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MSR">
//             <xsd:annotation>
//                 <xsd:documentation>MONTSERRAT</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MAR">
//             <xsd:annotation>
//                 <xsd:documentation>MOROCCO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MOZ">
//             <xsd:annotation>
//                 <xsd:documentation>MOZAMBIQUE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MMR">
//             <xsd:annotation>
//                 <xsd:documentation>MYANMAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NAM">
//             <xsd:annotation>
//                 <xsd:documentation>NAMIBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NRU">
//             <xsd:annotation>
//                 <xsd:documentation>NAURU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NPL">
//             <xsd:annotation>
//                 <xsd:documentation>NEPAL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NLD">
//             <xsd:annotation>
//                 <xsd:documentation>NETHERLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ANT">
//             <xsd:annotation>
//                 <xsd:documentation>NETHERLANDS ANTILLES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NCL">
//             <xsd:annotation>
//                 <xsd:documentation>NEW CALEDONIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NZL">
//             <xsd:annotation>
//                 <xsd:documentation>NEW ZEALAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NIC">
//             <xsd:annotation>
//                 <xsd:documentation>NICARAGUA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NER">
//             <xsd:annotation>
//                 <xsd:documentation>NIGER</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NGA">
//             <xsd:annotation>
//                 <xsd:documentation>NIGERIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NIU">
//             <xsd:annotation>
//                 <xsd:documentation>NIUE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NFK">
//             <xsd:annotation>
//                 <xsd:documentation>NORFOLK ISLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MNP">
//             <xsd:annotation>
//                 <xsd:documentation>NORTHERN MARIANA ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="NOR">
//             <xsd:annotation>
//                 <xsd:documentation>NORWAY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OMN">
//             <xsd:annotation>
//                 <xsd:documentation>OMAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PAK">
//             <xsd:annotation>
//                 <xsd:documentation>PAKISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PLW">
//             <xsd:annotation>
//                 <xsd:documentation>PALAU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PSE">
//             <xsd:annotation>
//                 <xsd:documentation>PALESTINIAN TERRITORY, OCCUPIED</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PAN">
//             <xsd:annotation>
//                 <xsd:documentation>PANAMA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PNG">
//             <xsd:annotation>
//                 <xsd:documentation>PAPUA NEW GUINEA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PRY">
//             <xsd:annotation>
//                 <xsd:documentation>PARAGUAY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PER">
//             <xsd:annotation>
//                 <xsd:documentation>PERU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PHL">
//             <xsd:annotation>
//                 <xsd:documentation>PHILIPPINES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PCN">
//             <xsd:annotation>
//                 <xsd:documentation>PITCAIRN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="POL">
//             <xsd:annotation>
//                 <xsd:documentation>POLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PRT">
//             <xsd:annotation>
//                 <xsd:documentation>PORTUGAL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="PRI">
//             <xsd:annotation>
//                 <xsd:documentation>PUERTO RICO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="QAT">
//             <xsd:annotation>
//                 <xsd:documentation>QATAR</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="REU">
//             <xsd:annotation>
//                 <xsd:documentation>"REUNION"</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ROU">
//             <xsd:annotation>
//                 <xsd:documentation>ROMANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RUS">
//             <xsd:annotation>
//                 <xsd:documentation>RUSSIAN FEDERATION</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="RWA">
//             <xsd:annotation>
//                 <xsd:documentation>RWANDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SHN">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT HELENA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="KNA">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT KITTS AND NEVIS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LCA">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT LUCIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SPM">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT PIERRA AND MIQUELON</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VCT">
//             <xsd:annotation>
//                 <xsd:documentation>SAINT VINCENT AND THE GRENADINES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="WSM">
//             <xsd:annotation>
//                 <xsd:documentation>SAMOA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SMR">
//             <xsd:annotation>
//                 <xsd:documentation>SAN MARINO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SSD">
//             <xsd:annotation>
//                 <xsd:documentation>SOUTH SUDAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="STP">
//             <xsd:annotation>
//                 <xsd:documentation>SAO TOME AND PRINCIPE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SAU">
//             <xsd:annotation>
//                 <xsd:documentation>SAUDI ARABIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SEN">
//             <xsd:annotation>
//                 <xsd:documentation>SENEGAL</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SYC">
//             <xsd:annotation>
//                 <xsd:documentation>SEYCHELLES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SLE">
//             <xsd:annotation>
//                 <xsd:documentation>SIERRA LEONE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SGP">
//             <xsd:annotation>
//                 <xsd:documentation>SINGAPORE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SVK">
//             <xsd:annotation>
//                 <xsd:documentation>SLOVAKIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SVN">
//             <xsd:annotation>
//                 <xsd:documentation>SLOVENIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SLB">
//             <xsd:annotation>
//                 <xsd:documentation>SOLOMON ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SOM">
//             <xsd:annotation>
//                 <xsd:documentation>SOMALIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ZAF">
//             <xsd:annotation>
//                 <xsd:documentation>SOUTH AFRICA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SGS">
//             <xsd:annotation>
//                 <xsd:documentation>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ESP">
//             <xsd:annotation>
//                 <xsd:documentation>SPAIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="LKA">
//             <xsd:annotation>
//                 <xsd:documentation>SRI LANKA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SDN">
//             <xsd:annotation>
//                 <xsd:documentation>SUDAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SUR">
//             <xsd:annotation>
//                 <xsd:documentation>SURINAME</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SJM">
//             <xsd:annotation>
//                 <xsd:documentation>SVALBARD AND JAN MAYEN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SWZ">
//             <xsd:annotation>
//                 <xsd:documentation>SWAZILAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SWE">
//             <xsd:annotation>
//                 <xsd:documentation>SWEDEN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="CHE">
//             <xsd:annotation>
//                 <xsd:documentation>SWITZERLAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SYR">
//             <xsd:annotation>
//                 <xsd:documentation>SYRIAN ARAB REPUBLIC</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TWN">
//             <xsd:annotation>
//                 <xsd:documentation>TIAWAN, PROVINCE OF CHINA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TJK">
//             <xsd:annotation>
//                 <xsd:documentation>TAJIKISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TZA">
//             <xsd:annotation>
//                 <xsd:documentation>TANZANIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="THA">
//             <xsd:annotation>
//                 <xsd:documentation>THAILAND</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TLS">
//             <xsd:annotation>
//                 <xsd:documentation>TIMOR-LESTE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TGO">
//             <xsd:annotation>
//                 <xsd:documentation>TOGO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TKL">
//             <xsd:annotation>
//                 <xsd:documentation>TOKELAU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TON">
//             <xsd:annotation>
//                 <xsd:documentation>TONGA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TTO">
//             <xsd:annotation>
//                 <xsd:documentation>TRINIDAD AND TOBAGO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TUN">
//             <xsd:annotation>
//                 <xsd:documentation>TUNISIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TUR">
//             <xsd:annotation>
//                 <xsd:documentation>TURKEY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TKM">
//             <xsd:annotation>
//                 <xsd:documentation>TURKMENISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TCA">
//             <xsd:annotation>
//                 <xsd:documentation>TURKS AND CAICOS ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="TUV">
//             <xsd:annotation>
//                 <xsd:documentation>TUVALU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UGA">
//             <xsd:annotation>
//                 <xsd:documentation>UGANDA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UKR">
//             <xsd:annotation>
//                 <xsd:documentation>UKRAINE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ARE">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED ARAB EMIRATES</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GBR">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED KINGDOM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UMI">
//             <xsd:annotation>
//                 <xsd:documentation>UNITED STATES MINOR OUTLYING ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="URY">
//             <xsd:annotation>
//                 <xsd:documentation>URUGUAY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="UZB">
//             <xsd:annotation>
//                 <xsd:documentation>UZBEKISTAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VUT">
//             <xsd:annotation>
//                 <xsd:documentation>VANUATU</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VEN">
//             <xsd:annotation>
//                 <xsd:documentation>VENEZUELA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VNM">
//             <xsd:annotation>
//                 <xsd:documentation>VIET NAM</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VGB">
//             <xsd:annotation>
//                 <xsd:documentation>VIRGIN ISLANDS, BRITISH</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="VIR">
//             <xsd:annotation>
//                 <xsd:documentation>VIRGIN ISLANDS, U.S.</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="WLF">
//             <xsd:annotation>
//                 <xsd:documentation>WALLIS AND FUTUNA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ESH">
//             <xsd:annotation>
//                 <xsd:documentation>WESTERN SAHARA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="YEM">
//             <xsd:annotation>
//                 <xsd:documentation>YEMEN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ZMB">
//             <xsd:annotation>
//                 <xsd:documentation>ZAMBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ZWE">
//             <xsd:annotation>
//                 <xsd:documentation>ZIMBABWE</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="GGY">
//             <xsd:annotation>
//                 <xsd:documentation>GUERNSEY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="IMN">
//             <xsd:annotation>
//                 <xsd:documentation>ISLE OF MILAN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="SRB">
//             <xsd:annotation>
//                 <xsd:documentation>SERBIA</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MAF">
//             <xsd:annotation>
//                 <xsd:documentation>ST. MAARTEN/ST. MARTIN</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ALA">
//             <xsd:annotation>
//                 <xsd:documentation>ALAND ISLANDS</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="BLM">
//             <xsd:annotation>
//                 <xsd:documentation>ST. BARTHILEMY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="MNE">
//             <xsd:annotation>
//                 <xsd:documentation>MONTENEGRO</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="JEY">
//             <xsd:annotation>
//                 <xsd:documentation>JERSEY</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface IConfirmationEnumeratedType {
//     <xsd:simpleType name="ConfirmationEnumeratedType">
//     <xsd:annotation>
//         <xsd:documentation source="http://www.starstandard.org/">Confirmation</xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="0">
//             <xsd:annotation>
//                 <xsd:documentation>Never send confirmation</xsd:documentation>
//                 <xsd:documentation>Deprecated. Use: "Never"</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="1">
//             <xsd:annotation>
//                 <xsd:documentation>Only send confirmation on error</xsd:documentation>
//                 <xsd:documentation>Deprecated. Use: "OnError"</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="2">
//             <xsd:annotation>
//                 <xsd:documentation>Always send confirmation</xsd:documentation>
//                 <xsd:documentation>Deprecated. Use: "Always"</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Never">
//             <xsd:annotation>
//                 <xsd:documentation>Never send confirmation</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="OnError">
//             <xsd:annotation>
//                 <xsd:documentation>Only send confirmation on error</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="Always">
//             <xsd:annotation>
//                 <xsd:documentation>Always send confirmation</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
export interface ILanguageEnumeratedType {
//     </xsd:documentation>
//     </xsd:annotation>
//     <xsd:restriction base="xsd:normalizedString">
//         <xsd:enumeration value="en-US">
//             <xsd:annotation>
//                 <xsd:documentation>English - American</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="en-CA">
//             <xsd:annotation>
//                 <xsd:documentation>English -Canada</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="aa-ET">
//             <xsd:annotation>
//                 <xsd:documentation>Afar - Ethiopia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ab-GE">
//             <xsd:annotation>
//                 <xsd:documentation>Abkhazian - Georgia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="af-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Afrikaans - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="am-ET">
//             <xsd:annotation>
//                 <xsd:documentation>Amharic - Ethiopia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ar-SA">
//             <xsd:annotation>
//                 <xsd:documentation>Arabic - Saudi Arabia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="as-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Assamese - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ay-BO">
//             <xsd:annotation>
//                 <xsd:documentation>Aymara - Bolivia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="az-AZ">
//             <xsd:annotation>
//                 <xsd:documentation>Azerbaijani - Azerbaijan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ba-RU">
//             <xsd:annotation>
//                 <xsd:documentation>Bashkir - Russian Federation</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="be-BY">
//             <xsd:annotation>
//                 <xsd:documentation>Byelorussian - Belarus</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bg-BG">
//             <xsd:annotation>
//                 <xsd:documentation>Bulgarian - Bulgaria</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bh-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Bihari - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bi-VU">
//             <xsd:annotation>
//                 <xsd:documentation>Bislama - Vanuatu</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bn-BD">
//             <xsd:annotation>
//                 <xsd:documentation>Bengali, Bangla - Bangladesh</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="bo-BT">
//             <xsd:annotation>
//                 <xsd:documentation>Tibetan - Bhutan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="br-FR">
//             <xsd:annotation>
//                 <xsd:documentation>Breton - France</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ca-ES">
//             <xsd:annotation>
//                 <xsd:documentation>Catalan - Spain</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="co-FR">
//             <xsd:annotation>
//                 <xsd:documentation>Corsican - France</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="cs-CZ">
//             <xsd:annotation>
//                 <xsd:documentation>Czech - Czech Republic</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="cy-GB">
//             <xsd:annotation>
//                 <xsd:documentation>Welsh - United Kingdom</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="da-DE">
//             <xsd:annotation>
//                 <xsd:documentation>Danish - Germany</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="da-DK">
//             <xsd:annotation>
//                 <xsd:documentation>Danish - Denmark</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="de-DE">
//             <xsd:annotation>
//                 <xsd:documentation>German - Germany</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="dz-BT">
//             <xsd:annotation>
//                 <xsd:documentation>Bhutani - Bhutan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="el-GR">
//             <xsd:annotation>
//                 <xsd:documentation>Greek - Greece</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="es-ES">
//             <xsd:annotation>
//                 <xsd:documentation>Spanish - Spain</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="et-EE">
//             <xsd:annotation>
//                 <xsd:documentation>Estonian - Estonia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="eu-ES">
//             <xsd:annotation>
//                 <xsd:documentation>Basque - Spain</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fa-AF">
//             <xsd:annotation>
//                 <xsd:documentation>Persian - Afghanistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fi-FI">
//             <xsd:annotation>
//                 <xsd:documentation>Finnish - Finland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fj-FJ">
//             <xsd:annotation>
//                 <xsd:documentation>Fiji - Fiji</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fo-FO">
//             <xsd:annotation>
//                 <xsd:documentation>Faeroese - Faroe Islands</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fr-CA">
//             <xsd:annotation>
//                 <xsd:documentation>French - Canada</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fr-FR">
//             <xsd:annotation>
//                 <xsd:documentation>French - France</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fy-NL">
//             <xsd:annotation>
//                 <xsd:documentation>Frisian - Netherlands</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ga-IE">
//             <xsd:annotation>
//                 <xsd:documentation>Irish - Ireland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="gd-GB">
//             <xsd:annotation>
//                 <xsd:documentation>Gaelic Scots Gaelic - United Kingdom</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="gl-ES">
//             <xsd:annotation>
//                 <xsd:documentation>Galician - Spain</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="gn-PY">
//             <xsd:annotation>
//                 <xsd:documentation>Guarani - Paraguay</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="gu-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Gujarati - Indonesia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ha-NG">
//             <xsd:annotation>
//                 <xsd:documentation>Hausa - Nigeria</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="hi-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Hindi - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="hr-HR">
//             <xsd:annotation>
//                 <xsd:documentation>Croatian - Croatia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="hu-HU">
//             <xsd:annotation>
//                 <xsd:documentation>Hungarian - Hungary</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="hy-AM">
//             <xsd:annotation>
//                 <xsd:documentation>Armenian - Armenia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ik-GL">
//             <xsd:annotation>
//                 <xsd:documentation>Inupiak - Greenland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="in-ID">
//             <xsd:annotation>
//                 <xsd:documentation>Indonesian - Indonesia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="is-IS">
//             <xsd:annotation>
//                 <xsd:documentation>Icelandic - Iceland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="it-IT">
//             <xsd:annotation>
//                 <xsd:documentation>Italian - Italy</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="iw-IL">
//             <xsd:annotation>
//                 <xsd:documentation>Hebrew - Israel</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ja-JP">
//             <xsd:annotation>
//                 <xsd:documentation>Japanese - Japan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ji-IL">
//             <xsd:annotation>
//                 <xsd:documentation>Yiddish - Israel</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="jw-ID">
//             <xsd:annotation>
//                 <xsd:documentation>Javanese - Indonesia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ka-GE">
//             <xsd:annotation>
//                 <xsd:documentation>Georgian - Georgia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="kk-KZ">
//             <xsd:annotation>
//                 <xsd:documentation>Kazakh - Kazakhstan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="kl-GL">
//             <xsd:annotation>
//                 <xsd:documentation>Greenlandic - Greenland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="km-KH">
//             <xsd:annotation>
//                 <xsd:documentation>Cambodian - Cambodia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="kn-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Kannada - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ko-KP">
//             <xsd:annotation>
//                 <xsd:documentation>Korean - Korea, Democratic People's Republic of</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ko-KR">
//             <xsd:annotation>
//                 <xsd:documentation>Korean - Korea, Republic of</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ks-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Kashmiri - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ku-IQ">
//             <xsd:annotation>
//                 <xsd:documentation>Kurdish - Iraq</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ky-CN">
//             <xsd:annotation>
//                 <xsd:documentation>Kirghiz - China</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="la-VA">
//             <xsd:annotation>
//                 <xsd:documentation>Latin - Holy See (Vatican City State)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ln-CD">
//             <xsd:annotation>
//                 <xsd:documentation>Lingala - Congo, The Democratic Republic of the</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="lo-LA">
//             <xsd:annotation>
//                 <xsd:documentation>Laothian - Lao People's Democratic Republic</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="lt-LT">
//             <xsd:annotation>
//                 <xsd:documentation>Lithuanian - Lithuania</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="lv-LV">
//             <xsd:annotation>
//                 <xsd:documentation>Latvian Lettish - Latvia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mg-MG">
//             <xsd:annotation>
//                 <xsd:documentation>Malagasy - Madagascar</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mi-NZ">
//             <xsd:annotation>
//                 <xsd:documentation>Maori - New Zealand</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mk-MK">
//             <xsd:annotation>
//                 <xsd:documentation>Macedonian - Macedonia, The Former Yugoslav</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ml-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Malayalam - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mn-MN">
//             <xsd:annotation>
//                 <xsd:documentation>Mongolian - Mongolia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mo-MO">
//             <xsd:annotation>
//                 <xsd:documentation>Moldavian - Macao</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mr-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Marathi - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ms-MY">
//             <xsd:annotation>
//                 <xsd:documentation>Malay - Malaysia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="mt-MH">
//             <xsd:annotation>
//                 <xsd:documentation>Maltese - Marshall Islands</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="my-MM">
//             <xsd:annotation>
//                 <xsd:documentation>Burmese - Myanmar</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="na-NR">
//             <xsd:annotation>
//                 <xsd:documentation>Nauru - Nauru</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ne-NP">
//             <xsd:annotation>
//                 <xsd:documentation>Nepali - Nepal</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="nl-NL">
//             <xsd:annotation>
//                 <xsd:documentation>Dutch - Netherlands</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="no-NO">
//             <xsd:annotation>
//                 <xsd:documentation>Norwegian - Norway</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="oc-FR">
//             <xsd:annotation>
//                 <xsd:documentation>Occitan - France</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="om-ET">
//             <xsd:annotation>
//                 <xsd:documentation>Oromo Afan - Ethiopia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="or-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Oriya - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pa-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Punjabi - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pl-PL">
//             <xsd:annotation>
//                 <xsd:documentation>Polish - Poland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ps-PK">
//             <xsd:annotation>
//                 <xsd:documentation>Pashto, Pushto - Pakistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pt-PT">
//             <xsd:annotation>
//                 <xsd:documentation>Portuguese - Portugal</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="qu-PE">
//             <xsd:annotation>
//                 <xsd:documentation>Quechua - Peru</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="rm-CH">
//             <xsd:annotation>
//                 <xsd:documentation>Rhaeto-Romance - Switzerland</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="rn-BI">
//             <xsd:annotation>
//                 <xsd:documentation>Kirundi - Burundi</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ro-RO">
//             <xsd:annotation>
//                 <xsd:documentation>Romanian - Romania</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ru-RU">
//             <xsd:annotation>
//                 <xsd:documentation>Russian - Russian Federation</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="rw-RW">
//             <xsd:annotation>
//                 <xsd:documentation>Kinyarwanda - Rwanda</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sa-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Sanskirt - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sd-PK">
//             <xsd:annotation>
//                 <xsd:documentation>Sindhi - Pakistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sg-CF">
//             <xsd:annotation>
//                 <xsd:documentation>Sangro - Central African Republic</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sh-HR">
//             <xsd:annotation>
//                 <xsd:documentation>Serbo-Croatian - Croatia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="si-LK">
//             <xsd:annotation>
//                 <xsd:documentation>Singhalese - Sri Lanka</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sk-SK">
//             <xsd:annotation>
//                 <xsd:documentation>Slovak - Slovakia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sl-SI">
//             <xsd:annotation>
//                 <xsd:documentation>Slovenian - Slovenia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sm-WS">
//             <xsd:annotation>
//                 <xsd:documentation>Samoan - Samoa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sn-ZW">
//             <xsd:annotation>
//                 <xsd:documentation>Shona - Zimbabwe</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="so-SO">
//             <xsd:annotation>
//                 <xsd:documentation>Somali - Somalia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sq-AL">
//             <xsd:annotation>
//                 <xsd:documentation>Albanian - Albania</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sr-CS">
//             <xsd:annotation>
//                 <xsd:documentation>Serbian - SErbia and Montenegro</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ss-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Siswati - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="st-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Sesotho - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="su-SD">
//             <xsd:annotation>
//                 <xsd:documentation>Sudanese - Sudan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sv-SE">
//             <xsd:annotation>
//                 <xsd:documentation>Swedish - Sweden</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="sw-TL">
//             <xsd:annotation>
//                 <xsd:documentation>Swahili - Timor-Leste</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ta-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Tamil - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="te-IN">
//             <xsd:annotation>
//                 <xsd:documentation>Tegulu - India</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tg-TJ">
//             <xsd:annotation>
//                 <xsd:documentation>Tajik - Tajikistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="th-TH">
//             <xsd:annotation>
//                 <xsd:documentation>Thai - Thailand</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ti-ET">
//             <xsd:annotation>
//                 <xsd:documentation>Tigrinya - Ethiopia</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tk-TM">
//             <xsd:annotation>
//                 <xsd:documentation>Turkmen - Turkmenistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tl-PH">
//             <xsd:annotation>
//                 <xsd:documentation>Tagalog - Philippines</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tn-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Setswana - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="to-TO">
//             <xsd:annotation>
//                 <xsd:documentation>Tonga - Tonga</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tr-TR">
//             <xsd:annotation>
//                 <xsd:documentation>Turkish - Turkey</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ts-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Tsonga - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tt-RU">
//             <xsd:annotation>
//                 <xsd:documentation>Tatar - Russian Federation</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="tw-GH">
//             <xsd:annotation>
//                 <xsd:documentation>Twi - Ghana</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="uk-UA">
//             <xsd:annotation>
//                 <xsd:documentation>Ukrainian - Ukraine</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="ur-PK">
//             <xsd:annotation>
//                 <xsd:documentation>Urdu - Pakistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="uz-UZ">
//             <xsd:annotation>
//                 <xsd:documentation>Uzbek - Uzbekistan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="vi-VN">
//             <xsd:annotation>
//                 <xsd:documentation>Vietnamese - Vietnam</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="wo-SN">
//             <xsd:annotation>
//                 <xsd:documentation>Wolof - Senegal</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="xh-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Xhosa - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="yo-NG">
//             <xsd:annotation>
//                 <xsd:documentation>Yoruba - Nigeria</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="zh-CN">
//             <xsd:annotation>
//                 <xsd:documentation>Chinese - China</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="zu-ZA">
//             <xsd:annotation>
//                 <xsd:documentation>Zulu - South Africa</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="en-GB">
//             <xsd:annotation>
//                 <xsd:documentation>English - United Kingdom</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="zh-TW">
//             <xsd:annotation>
//                 <xsd:documentation>Mandarin - Taiwan</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="es-MX">
//             <xsd:annotation>
//                 <xsd:documentation>Spanish - Mexico</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="pt-BR">
//             <xsd:annotation>
//                 <xsd:documentation>Portuguese - Brazil</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="nl-BE">
//             <xsd:annotation>
//                 <xsd:documentation>Locale Dutch (Belgium)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="fr-BE">
//             <xsd:annotation>
//                 <xsd:documentation>Locale French (Belgium)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//         <xsd:enumeration value="de-BE">
//             <xsd:annotation>
//                 <xsd:documentation>Locale German (Belgium)</xsd:documentation>
//             </xsd:annotation>
//         </xsd:enumeration>
//     </xsd:restriction>
// </xsd:simpleType>
}
//#endregion