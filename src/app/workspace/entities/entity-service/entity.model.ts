export interface EntityRegistration {
    ueiSAM: string;
    ueiDUNS: string;
    entityEFTIndicator: string;
    cageCode: string;
    dodaac?: any;
    legalBusinessName: string;
    dbaName: string;
    purposeOfRegistrationCode: string;
    purposeOfRegistrationDesc: string;
    registrationStatus: string;
    registrationDate: string;
    lastUpdateDate: string;
    expirationDate: string;
    activationDate: string;
    noPublicDisplayFlag: string;
    exclusionStatusFlag?: any;
    exclusionURL?: any;
}

export interface EntityInformation {
    entityURL: string;
    entityDivisionName: string;
    entityDivisionNumber: string;
    entityStartDate: string;
    fiscalYearEndCloseDate: string;
    submissionDate: string;
    correspondenceFlag: string;
}

export interface PhysicalAddress {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    zipCodePlus4: string;
    country: string;
    congressionalDistrict: string;
}

export interface MailingAddress {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    zipCodePlus4: string;
    country: string;
}

export interface GeneralInformation {
    entityStructureCode: string;
    entityStructureDesc: string;
    entityTypeCode: string;
    entityTypeDesc: string;
    profitStructureCode: string;
    profitStructureDesc: string;
    organizationStructureCode: string;
    organizationStructureDesc: string;
    stateOfIncorporationCode: string;
    stateOfIncorporationDesc: string;
    countryOfIncorporationCode: string;
    countryOfIncorporationDesc: string;
}

export interface BusinessTypeList {
    businessTypeCode: string;
    businessTypeDesc: string;
}

export interface SbaBusinessTypeList {
    sbaBusinessTypeCode?: any;
    sbaBusinessTypeDesc?: any;
    expirationDate?: any;
}

export interface BusinessTypes {
    businessTypeList: BusinessTypeList[];
    sbaBusinessTypeList: SbaBusinessTypeList[];
}

export interface FinancialInformation {
    creditCardUsage: string;
    debtSubjectToOffset: string;
}

export interface CoreData {
    entityInformation: EntityInformation;
    physicalAddress: PhysicalAddress;
    mailingAddress: MailingAddress;
    generalInformation: GeneralInformation;
    businessTypes: BusinessTypes;
    financialInformation: FinancialInformation;
}

export interface NaicsList {
    naicsCode: string;
    naicsDescription: string;
    sbaSmallBusiness: string;
    naicsException: string;
}

export interface PscList {
    pscCode: string;
    pscDescription: string;
}

export interface GoodsAndServices {
    primaryNaics: string;
    naicsList: NaicsList[];
    pscList: PscList[];
}

export interface GeographicalAreaServed {
    geographicalAreaServedStateCode: string;
    geographicalAreaServedStateName: string;
    geographicalAreaServedCountyCode: string;
    geographicalAreaServedCountyName: string;
    geographicalAreaServedmetropolitanStatisticalArea: string;
}

export interface DisasterReliefData {
    disasterRegistryFlag: string;
    bondingFlag: string;
    geographicalAreaServed: GeographicalAreaServed[];
}

export interface Assertions {
    goodsAndServices: GoodsAndServices;
    disasterReliefData: DisasterReliefData;
}

export interface ListOfProvision {
    provisionId: string;
}

export interface ListOfAnswer {
    answerType: string;
    answerId: string;
    answerText: string;
    businessObjectType: string;
    businessObjectId: string;
    firstName: string;
    title: string;
    section: string;
    status: string;
    organizationType: string;
    endProductName: string;
    endProductType: string;
    endProductCountry: string;
    placeOfManufacture: string;
    fscCode: string;
    environmentURL: string;
    facilityStreetAddress1: string;
    facilityStreetAddress2: string;
    facilityCity: string;
    facilityPostalCode: string;
    facilityState: string;
    facilityCountry: string;
    facilityOwner: string;
    facilityOwnerStreetAddress1: string;
    facilityOwnerStreetAddress2: string;
    facilityOwnerCity: string;
    facilityOwnerPostalCode: string;
    facilityOwnerState: string;
    facilityOwnerCountry: string;
    immediateOwnerLegalBusinessName: string;
    immediateOwnerCageCode: string;
    highestOwnerLegalBusinessName: string;
    highestOwnerCageCode: string;
    firstPredecessorLegalBusinessName: string;
    firstPredecessorCageCode: string;
    secondPredecessorLegalBusinessName: string;
    secondPredecessorCageCode: string;
    thirdPredecessorLegalBusinessName: string;
    thirdPredecessorCageCode: string;
    primaryNaics: string;
    naicsCode: string;
    sbaSmallBusiness: string;
    smallBusiness: string;
    veteranOwnedSmallBusiness: string;
    serviceDisabledVetOwnedSmallBusiness: string;
    womenOwnedSmallBusinessConcern: string;
    womenOwnedSmallBusiness: string;
    economicallyDisadvWomenOwnedSmallBusiness: string;
    smallDisadvantagedBusinessConcern: string;
    sbaCertifiedSmallBusinessDisadvBusiness: string;
    sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted: string;
    hubZoneSmallBusinessConcern: string;
    blackAmerican: string;
    hispanicAmerican: string;
    nativeAmerican: string;
    asianPacificAmerican: string;
    subcontinentAsianIndianAmerican: string;
    historicallyBlackCollegeOrUniversity: string;
    minorityInstitution: string;
    linkForFARReportPDF: string;
    linkForFARReportHTML: string;
}

export interface FARRespons {
    listOfProvisions: ListOfProvision[];
    listOfAnswers: ListOfAnswer[];
}

export interface ListOfProvision2 {
    provisionId: string;
}

export interface ListOfAnswer2 {
    answerType: string;
    answerId: string;
    answerText: string;
    businessObjectType: string;
    businessObjectId: string;
    section: string;
    foreignGovernmentOwnershipFirstName: string;
    foreignGovernmentOwnershipMiddleInitial: string;
    foreignGovernmentOwnershipLastName: string;
    foreignGovernmentOwnershipPhoneNum: string;
    foreignGovernmentOwnershipPhoneExt: string;
    foreignGovernmentOwnershipInternationalNum: string;
    foreignGovernmentControlCountry: string;
    foreignEndProductName: string;
    foreignEndProductCountry: string;
    linkForDFARSReportPDF: string;
    linkForDFARSReportHTML: string;
}

export interface DFARRespons {
    listOfProvisions: ListOfProvision2[];
    listOfAnswers: ListOfAnswer2[];
}

export interface Certifications {
    fARResponses: FARRespons[];
    dFARResponses: DFARRespons[];
}

export interface ListOfProvision3 {
    provisionId: string;
}

export interface ListOfAnswer3 {
    answerType: string;
    answerId: string;
    answerText: string;
    businessObjectType: string;
    businessObjectId: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    title: string;
    companyName: string;
    companyEstablishedYear: string;
    companyDUNS: string;
    companyIsReference: string;
    firmNumOfEmployees: string;
    branchNumOfEmployees: string;
    experienceCode: string;
    annualAvgRevenueCode: string;
    federalRevenueCode: string;
    nonFedRevenueCode: string;
    totalRevenueCode: string;
    qualificationURLPDF: string;
    qualificationURLHTML: string;
}

export interface ArchitectEngineerResponses {
    listOfProvisions: ListOfProvision3[];
    listOfAnswers: ListOfAnswer3[];
}

export interface Qualifications {
    architectEngineerResponses: ArchitectEngineerResponses;
}

export interface FinancialAssistanceCertifications {
    financialAssistanceResponse: string;
}

export interface RepsAndCerts {
    certifications: Certifications;
    qualifications: Qualifications;
    financialAssistanceCertifications: FinancialAssistanceCertifications;
}

export interface GovernmentBusinessPOC {
    firstName: string;
    middleInitial: string;
    lastName: string;
    title: string;
    usPhone: string;
    usPhoneExtension: string;
    nonUSPhone: string;
    fax: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    stateOrProvince: string;
    zipCode: string;
    zipCodePlus4: string;
    country: string;
}

export interface ElectronicBusinessPOC {
    firstName: string;
    middleInitial: string;
    lastName: string;
    title: string;
    usPhone: string;
    usPhoneExtension: string;
    nonUSPhone: string;
    fax: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    stateOrProvince: string;
    zipCode: string;
    zipCodePlus4: string;
    country: string;
}

export interface GovernmentBusinessAlternatePOC {
    firstName?: any;
    middleInitial?: any;
    lastName?: any;
    title?: any;
    usPhone?: any;
    usPhoneExtension?: any;
    nonUSPhone?: any;
    fax?: any;
    email?: any;
    address1?: any;
    address2?: any;
    city?: any;
    stateOrProvince?: any;
    zipCode?: any;
    zipCodePlus4?: any;
    country?: any;
}

export interface ElectronicBusinessAlternatePOC {
    firstName?: any;
    middleInitial?: any;
    lastName?: any;
    title?: any;
    usPhone?: any;
    usPhoneExtension?: any;
    nonUSPhone?: any;
    fax?: any;
    email?: any;
    address1?: any;
    address2?: any;
    city?: any;
    stateOrProvince?: any;
    zipCode?: any;
    zipCodePlus4?: any;
    country?: any;
}

export interface PastPerformancePOC {
    firstName?: any;
    middleInitial?: any;
    lastName?: any;
    title?: any;
    usPhone?: any;
    usPhoneExtension?: any;
    nonUSPhone?: any;
    fax?: any;
    email?: any;
    address1?: any;
    address2?: any;
    city?: any;
    stateOrProvince?: any;
    zipCode?: any;
    zipCodePlus4?: any;
    country?: any;
}

export interface PastPerformanceAlternatePOC {
    firstName: string;
    middleInitial: string;
    lastName: string;
    title?: any;
    usPhone: string;
    usPhoneExtension?: any;
    nonUSPhone?: any;
    fax?: any;
    email: string;
    address1: string;
    address2?: any;
    city: string;
    stateOrProvince: string;
    zipCode: string;
    zipCodePlus4?: any;
    country: string;
}

export interface PointsOfContact {
    governmentBusinessPOC: GovernmentBusinessPOC;
    electronicBusinessPOC: ElectronicBusinessPOC;
    governmentBusinessAlternatePOC: GovernmentBusinessAlternatePOC;
    electronicBusinessAlternatePOC: ElectronicBusinessAlternatePOC;
    pastPerformancePOC: PastPerformancePOC;
    pastPerformanceAlternatePOC: PastPerformanceAlternatePOC;
}

export interface EntityData {
    entityRegistration: EntityRegistration;
    coreData: CoreData;
    assertions: Assertions;
    repsAndCerts: RepsAndCerts;
    pointsOfContact: PointsOfContact;
}
