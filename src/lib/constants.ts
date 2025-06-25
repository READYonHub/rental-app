import {
  Wifi,
  Waves,
  Dumbbell,
  Car,
  PawPrint,
  Tv,
  Thermometer,
  Cigarette,
  Cable,
  Maximize,
  Bath,
  Phone,
  Sprout,
  Hammer,
  Bus,
  Mountain,
  VolumeX,
  Home,
  Warehouse,
  Building,
  Castle,
  Trees,
  LucideIcon,
} from "lucide-react";

export enum AmenityEnum {
  WasherDryer = "WasherDryer",
  AirConditioning = "AirConditioning",
  Dishwasher = "Dishwasher",
  HighSpeedInternet = "HighSpeedInternet",
  HardwoodFloors = "HardwoodFloors",
  WalkInClosets = "WalkInClosets",
  Microwave = "Microwave",
  Refrigerator = "Refrigerator",
  Pool = "Pool",
  Gym = "Gym",
  Parking = "Parking",
  PetsAllowed = "PetsAllowed",
  WiFi = "WiFi",
}

export const AmenityIcons: Record<AmenityEnum, LucideIcon> = {
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Dishwasher: Waves,
  HighSpeedInternet: Wifi,
  HardwoodFloors: Home,
  WalkInClosets: Maximize,
  Microwave: Tv,
  Refrigerator: Thermometer,
  Pool: Waves,
  Gym: Dumbbell,
  Parking: Car,
  PetsAllowed: PawPrint,
  WiFi: Wifi,
};

export enum HighlightEnum {
  HighSpeedInternetAccess = "HighSpeedInternetAccess",
  WasherDryer = "WasherDryer",
  AirConditioning = "AirConditioning",
  Heating = "Heating",
  SmokeFree = "SmokeFree",
  CableReady = "CableReady",
  SatelliteTV = "SatelliteTV",
  DoubleVanities = "DoubleVanities",
  TubShower = "TubShower",
  Intercom = "Intercom",
  SprinklerSystem = "SprinklerSystem",
  RecentlyRenovated = "RecentlyRenovated",
  CloseToTransit = "CloseToTransit",
  GreatView = "GreatView",
  QuietNeighborhood = "QuietNeighborhood",
}

export const HighlightIcons: Record<HighlightEnum, LucideIcon> = {
  HighSpeedInternetAccess: Wifi,
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Heating: Thermometer,
  SmokeFree: Cigarette,
  CableReady: Cable,
  SatelliteTV: Tv,
  DoubleVanities: Maximize,
  TubShower: Bath,
  Intercom: Phone,
  SprinklerSystem: Sprout,
  RecentlyRenovated: Hammer,
  CloseToTransit: Bus,
  GreatView: Mountain,
  QuietNeighborhood: VolumeX,
};

export enum PropertyTypeEnum {
  Rooms = "Rooms",
  Tinyhouse = "Tinyhouse",
  Apartment = "Apartment",
  Villa = "Villa",
  Townhouse = "Townhouse",
  Cottage = "Cottage",
}

export const PropertyTypeIcons: Record<PropertyTypeEnum, LucideIcon> = {
  Rooms: Home,
  Tinyhouse: Warehouse,
  Apartment: Building,
  Villa: Castle,
  Townhouse: Home,
  Cottage: Trees,
};

// Add this constant at the end of the file
export const NAVBAR_HEIGHT = 52; // in pixels

// Test users for development
export const testUsers = {
  tenant: {
    username: "Carol White",
    userId: "us-east-2:76543210-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "carol.white@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  tenantRole: "tenant",
  manager: {
    username: "John Smith",
    userId: "us-east-2:12345678-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "john.smith@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  managerRole: "manager",
};

export const metaData = {
  appName: "Utazásiroda",
  appDesc:
    "Ez egy utazásiroda alkalmazás, amely segít a felhasználóknak felfedezni és foglalni utazásokat.",
};

export const LandingPageData = {
  heroSection: {
    title: "Utazásiroda: A Te Utazásod Kezdete",
    subTitle:
      "Fedezd fel a világot velünk! Az Utazásiroda egy hely, ahol megtalálod a legjobb utazási ajánlatokat, szállásokat és élményeket.",
    searchPlaceholder: "Keresés város, környék vagy cím szerint",
    searchPlaceholderEmpty: "Itt tudsz keresni...",
    searchButtonText: "Keresés",
  },
  featuresSection: {
    title:
      "Találd meg gyorsan a kívánt otthont hatékony keresési szűrőink segítségével!",
    items: {
      item1: {
        itemTitle: "Megbízható és ellenőrzött hirdetések",
        itemImgSrc: "/landing-search0.png",
        itemDesc: "Megbízható és ellenőrzött hirdetések",
        itemLinkText: "Fedezd fel",
        itemLinkHref: "/explore",
      },
      item2: {
        itemTitle: "Böngésszen könnyedén a kiadó ingatlanok hirdetései között",
        itemImgSrc: "/landing-search1.png",
        itemDesc:
          "Hozzáférés a felhasználói véleményekhez és értékelésekhez a kiadó ingatlanok jobb megértése érdekében.",
        itemLinkText: "Keresés",
        itemLinkHref: "/search",
      },
      item3: {
        itemTitle: "Egyszerűsítse a keresést a speciális funkciókkal",
        itemImgSrc: "/landing-search2.png",
        itemDesc:
          "Találjon megbízható és ellenőrzött kiadó ingatlanokat a gondtalan élmény érdekében.",
        itemLinkText: "Találd meg",
        itemLinkHref: "/discover",
      },
    },
  },
  discoverSection: {
    title: "Fedezd fel",
    subTitle: "Találd meg álmaid bérleti ingatlanát még ma!",
    desc: "Fedezd fel a legjobb bérleti ingatlanokat, és találd meg az ideális otthont, amely minden igényedet kielégíti. Kezdd el a keresést még ma, és fedezd fel álmaid bérleti ingatlanját!",
    items: {
      item1: {
        itemTitle: "Ingatlanok keresése",
        itemImgSrc: "/landing-icon-wand.png",
        itemDesc:
          "Böngésszen széles választékú bérleményeink között a kívánt helyen.",
        itemLinkText: "Fedezd fel",
        itemLinkHref: "/explore",
      },
      item2: {
        itemTitle: "Foglalja le bérleményét",
        itemImgSrc: "/landing-icon-calendar.png",
        itemDesc:
          "Miután megtalálta a tökéletes bérleményt, egyszerűen lefoglalhatja online, mindössze néhány kattintással.",
        itemLinkText: "Keresés",
        itemLinkHref: "/search",
      },
      item3: {
        itemTitle: "Élvezze új otthonát",
        itemImgSrc: "/landing-icon-heart.png",
        itemDesc:
          "Költözzön be új bérleményébe, és kezdje el élvezni álmai otthonát.",
        itemLinkText: "Találd meg",
        itemLinkHref: "/discover",
      },
    },
  },
  callToActionSection: {
    title: "Találd meg álmaid bérleményét!",
    subTitle: "Fedezzen fel széles választékban bérleményeket a kívánt helyen.",
    searchButtonText: "Keresés",
    signUpButtonText: "Regisztráció",
  },
  footerSection: {
    title: "Utazásiroda",
    nav: {
      About: "Rólunk",
      Contact: "Kapcsolat",
      FAQ: "GYIK",
      Privacy: "Adatvédelem",
      Terms: "Felhasználási feltételek",
    },
    copiRight: {
      name: "Utazásiroda",
      rights: " Minden jog fenntartva.",
      PrivacyPolicy: "Adatvédelmi irányelvek",
      TermsofService: "Szolgáltatási feltételek",
      CookiePolicy: "Süti szabályzat",
    },
  },
};

export const navbarData = {
  titleLeftPiece: "Utazás",
  titleRightPiece: "iroda",
  logoSrc: "/logo.svg",
  desc: "Fedezze fel a tökéletes bérlakást a részletes keresésünkkel",
  signIn: "Bejelentkezés",
  signOut: "Kijelentkezés",
};
