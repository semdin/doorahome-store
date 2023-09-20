export interface Store {
    id: String;
    name: String;
    siteLink: String;
    cardName: String;
    card1Title: String;
    card1Description: String;
    card2Title: String;
    card2Description: String;
    card3Title: String;
    card3Description: String;
    fLogoUrl: String;
    fRes1Title: String;
    fRes1Link: String;
    fRes2Title: String;
    fRes2Link: String;
    facebookUrl: String;
    instagramUrl: String;
    twitterUrl: String;
    privacyPolicy: String;
    termsAndConditions: String;
    contactUsDescription: String;
    contactUsCard1Descrition: String;
    contactUsCard1Email: String;
    contactUsCard2Descrition: String;
    contactUsCard2Phone: String;
    aboutUsDescription: String;
    aboutUsPhotoUrl: String;
    aboutUsOurStory: String;
  }

export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    parentCategoryId: string;
    category: Category[];
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    description: String;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];

};

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface About {
    id: string;
    label: string;
    imageUrl: string;
}