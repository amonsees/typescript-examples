
export interface ISite {
    name: string;
    description?: string;
    height?: number;

    siteType: SiteType
};

export enum SiteType {
    building = 'Building',
    park = 'Park',
    museum = 'Museum'
}


export function addSite(site: ISite) {

}

const site: ISite = {
    name: 'Willis Tower',
    height: 1500,
    siteType: SiteType.building
};

addSite(site);

const site2 = {
    name: 'Field Museum',
    siteType: SiteType.park
};

addSite(site2);