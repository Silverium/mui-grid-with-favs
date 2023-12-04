export interface CertificateItem {
    id: number;
    uniqueNumber: string;
    companyName: string;
    countryCode: string;
    combinedCertificates?: CertificateItem[];
    carbonUser: {
        company: {
            name: string;
            address: {
                country: string;
            }
        }
    }
}
export interface CertificatesResult {
    result: {
        data: CertificateItem[];
    }
}
