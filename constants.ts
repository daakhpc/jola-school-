
import { StaffMember, ResultsData } from './types';

export const schoolName = "राजकीय आश्रम पद्धति विद्यालय";
export const schoolAddress = "बालक जौला डिंडौली नागल सहारनपुर";

export const navLinks = [
    { href: '#home', label: 'होम' },
    { href: '#facilities', label: 'सुविधाएं' },
    { href: '#academics', label: 'अकादमिक' },
    { href: '#staff', label: 'स्टाफ' },
    { href: '#results', label: 'परिणाम' },
    { href: '#gallery', label: 'गैलरी' },
];

export const staffData: StaffMember[] = [
    { id: 1, name: "डॉ० दिनेश कुमार", designation: "प्र० प्रधानाचार्य", subject: "इतिहास" },
    { id: 2, name: "श्री पवन कुमार", designation: "प्रवक्ता", subject: "जीव विज्ञान" },
    { id: 3, name: "श्री संजीव कुमार सौन्दर्य", designation: "प्रवक्ता", subject: "समाजशास्त्र" },
    { id: 4, name: "श्री खालिक अहमद", designation: "प्रवक्ता", subject: "अर्थशास्त्र" },
    { id: 5, name: "श्री अनिल कुमार", designation: "प्रवक्ता", subject: "रसायन विज्ञान" },
    { id: 6, name: "श्री आशु कुमार", designation: "सहायक अध्या०", subject: "विज्ञान" },
    { id: 7, name: "श्री हरदीप सिंह", designation: "सहायक अध्या०", subject: "व्यायाम शिक्षक" },
    { id: 8, name: "श्रीमती प्रियंका शर्मा", designation: "सहायक अध्या०", subject: "हिंदी" },
    { id: 9, name: "श्रीमती करुणा रानी", designation: "सहायक अध्या०", subject: "सामाजिक विज्ञान" },
    { id: 10, name: "श्रीमती प्रियंका", designation: "सहायक अध्या०", subject: "अंग्रेजी" },
    { id: 11, name: "श्री रजनीश कुमार", designation: "सहायक अध्या०", subject: "सामाजिक विज्ञान" },
    { id: 12, name: "श्रीमती प्रियंका त्यागी", designation: "सहायक अध्या०", subject: "अंग्रेजी" },
];

export const resultsData: ResultsData = {
    "2023-24": {
        class10: { total: 15, passed: 8, compartment: 7, passPercentage: "53.33%", toppers: [{ name: "नितिन कुमार", score: "70.20" }, { name: "कार्तिक सैनी", score: "58.80" }, { name: "विनित कुमार", score: "51.80" }] },
        class12: { total: 4, passed: 4, failed: 0, passPercentage: "100%", toppers: [{ name: "शिवम्", score: "70.80" }, { name: "सौरभ", score: "69.00" }, { name: "अक्षय कुमार", score: "62.40" }] }
    },
    "2022-23": {
        class10: { total: 26, passed: 21, failed: 5, passPercentage: "80.76%", toppers: [{ name: "विशाल शर्मा", score: "65.60" }, { name: "पीयूष धीमान", score: "62.00" }, { name: "नितिन प्रभात", score: "55.80" }] },
        class12: { total: 8, passed: 7, failed: 1, passPercentage: "87.50%", toppers: [{ name: "अजय", score: "75.83" }, { name: "आकाश", score: "71.50" }, { name: "सोंनू", score: "68.83" }] }
    },
    "2021-22": {
        class10: { total: 24, passed: 24, failed: 0, passPercentage: "100%", toppers: [{ name: "आकाश कुमार", score: "75.60" }, { name: "कन्हैयालाल", score: "63.60" }, { name: "मंयक कुमार ब्रहमगौड", score: "59.80" }] },
        class12: { total: 6, passed: 6, failed: 0, passPercentage: "100%", toppers: [{ name: "सोनू सैनी", score: "70.16" }, { name: "ईशान्त", score: "66.66" }, { name: "शिवलाल", score: "62.16" }] }
    },
    "2020-21": {
        class10: { total: 15, passed: 15, failed: 0, passPercentage: "100%", toppers: [{ name: "सोनू", score: "75.20" }, { name: "राहुल सहगल", score: "52.80" }, { name: "आकाश कुमार", score: "44.60" }] },
        class12: { total: 2, passed: 2, failed: 0, passPercentage: "100%", toppers: [{ name: "विकास कुमार", score: "55.67" }, { name: "कुनाल", score: "50.00" }] }
    },
    "2019-20": {
        class10: { total: 18, passed: 11, failed: 7, passPercentage: "61.11%", toppers: [{ name: "अकिल चौधरी", score: "71.20" }, { name: "अंकित कुमार", score: "65.40" }, { name: "सोनू कुमार सैनी", score: "58.20" }] },
        class12: { total: 12, passed: 8, failed: 4, passPercentage: "66.66%", toppers: [{ name: "जुनैद", score: "76.16" }, { name: "विकास कुमार", score: "61.83" }, { name: "अंकित सैनी", score: "52.66" }] }
    },
    "2018-19": {
        class10: { total: 18, passed: 16, failed: 2, passPercentage: "88.88%", toppers: [{ name: "अभिषेक", score: "67.50" }, { name: "रोहित", score: "67.00" }, { name: "दीपांशु", score: "63.16" }] },
        class12: { total: 9, passed: 7, failed: 2, passPercentage: "77.77%", toppers: [{ name: "तनवीर", score: "61.83" }, { name: "सचिन", score: "60.83" }, { name: "अरूण सैनी", score: "55.66" }] }
    },
    "2017-18": {
        class10: { total: 18, passed: 18, failed: 0, passPercentage: "100%", toppers: [{ name: "मनीष सैनी", score: "76.00" }, { name: "अर्जुन", score: "75.50" }, { name: "गौरव कुमार", score: "74.16" }] },
        class12: { total: 7, passed: 7, failed: 0, passPercentage: "100%", toppers: [{ name: "विशाल सैनी", score: "68.16" }, { name: "अर्पित कुमार", score: "59.83" }, { name: "आशु कुमार", score: "58.67" }] }
    },
    "2016-17": {
        class10: { total: 26, passed: 25, failed: 1, passPercentage: "96.15%", toppers: [{ name: "ईशान्त", score: "84.50" }, { name: "रितिक कुमार", score: "78.33" }, { name: "जोनी कुमार", score: "75.33" }] },
        class12: { total: 12, passed: 11, failed: 1, passPercentage: "91.67%", toppers: [{ name: "विरेन्द्र", score: "66.50" }, { name: "विकास", score: "66.00" }, { name: "सुनील", score: "64.16" }] }
    },
    "2015-16": {
        class10: { total: 20, passed: 20, failed: 0, passPercentage: "100%", toppers: [{ name: "विशाल सैनी", score: "79.33" }, { name: "हरीश कुमार", score: "76.83" }, { name: "अजय कुमार", score: "76.33" }] },
        class12: { total: 1, passed: 1, failed: 0, passPercentage: "100%", toppers: [{ name: "अरशद", score: "56.70" }] }
    },
    "2014-15": {
        class10: { total: 16, passed: 16, failed: 0, passPercentage: "100%", toppers: [{ name: "विभोर", score: "85.17" }, { name: "सौरभ कुमार", score: "82.50" }, { name: "सूरज", score: "81.00" }] },
        class12: { total: 2, passed: 2, failed: 0, passPercentage: "100%", toppers: [{ name: "अजीत", score: "69.16" }, { name: "नितिन कुमार", score: "65.00" }] }
    },
    "2013-14": {
        class10: { total: 19, passed: 19, failed: 0, passPercentage: "100%", toppers: [{ name: "नितिन कुमार", score: "83.67" }, { name: "कुलदीप कुमार", score: "83.67" }, { name: "दीपक कुमार", score: "82.83" }] },
        class12: { total: '०', passed: '०', failed: '०', passPercentage: "NA", toppers: [] }
    },
    "2012-13": {
        class10: { total: 19, passed: 19, failed: 0, passPercentage: "100%", toppers: [{ name: "आशुतोष राज", score: "78.50" }, { name: "विनित कुमार", score: "77.00" }, { name: "विजय कुमार", score: "74.30" }] },
        class12: { total: 7, passed: 7, failed: 0, passPercentage: "100%", toppers: [{ name: "गोविन्दा", score: "74.33" }, { name: "सालिम", score: "73.16" }, { name: "सचिन", score: "68.16" }] }
    },
};
