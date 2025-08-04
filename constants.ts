
import { StaffMember, ResultsData, NavLink, Facility, GalleryImage, Bilingual } from './types';

export const schoolInfo = {
    name: {
        en: "Rajkiya Ashram Paddhati Vidyalaya",
        hi: "राजकीय आश्रम पद्धति विद्यालय"
    },
    address: {
        en: "Balak, Jaula Dindoli, Nagal, Saharanpur",
        hi: "बालक जौला डिंडौली नागल सहारनपुर"
    },
    managedBy: {
        en: "Managed by: Social Welfare Department, Uttar Pradesh, Lucknow",
        hi: "द्वारा संचालित: समाज कल्याण विभाग, उत्तरप्रदेश, लखनऊ"
    }
};

export const navLinks: NavLink[] = [
    { href: '#home', label: { en: 'Home', hi: 'होम' } },
    { href: '#facilities', label: { en: 'Facilities', hi: 'सुविधाएं' } },
    { href: '#academics', label: { en: 'Academics', hi: 'अकादमिक' } },
    { href: '#staff', label: { en: 'Staff', hi: 'स्टाफ' } },
    { href: '#results', label: { en: 'Results', hi: 'परिणाम' } },
    { href: '#gallery', label: { en: 'Gallery', hi: 'गैलरी' } },
];

export const homeContent = {
    title: { en: 'Introduction', hi: 'परिचय' },
    p1: {
        en: 'The construction of Rajkiya Ashram Paddhati Vidyalaya, Jaula Dindoli, Nagal, Saharanpur, began in 2008, and the school became operational in 2011.',
        hi: 'राजकीय आश्रम पद्धति विद्यालय जौला डिंडौली नागल सहारनपुर का निर्माण, वर्ष 2008 में प्रारम्भ हुआ तथा वर्ष 2011 में विद्यालय संचालित हुआ।'
    },
    p2: {
        en: 'The school has a total student capacity of 490. It provides free education, uniforms, accommodation, daily necessities, study materials, school attire, sports, and computer facilities to socially and economically weaker children from rural and urban areas.',
        hi: 'विद्यालय की कुल छात्र क्षमता 490 है। यह विद्यालय केवल सामाजिक, आर्थिक दृष्टि से कमजोर व शिक्षा से वंचित, ग्रामीण और शहरी क्षेत्रों के बालको को शिक्षा के साथ-साथ निशुल्क यूनिफार्म, आवास, दैनिक प्रयोग की सभी वस्तुए, अध्ययन लेखन सामग्री, गणवेश, खेलकूद व कम्प्यूटर की सुविधा उपलब्ध कराता है।'
    },
    imageUrl: './user_upload_0.png'
};

export const facilitiesContent: Facility[] = [
  {
    title: { en: "Digital Education (Smart Class)", hi: "डिजिटल शिक्षा (स्मार्ट क्लास)" },
    description: {
        en: "Smart classes are conducted for students. Under digital education, modern education is provided to students through projectors, a tab lab, and a computer lab.",
        hi: "छात्रों हेतु स्मार्ट क्लास संचालित की जाती है। डिजिटल शिक्षा के अंतर्गत छात्रों को प्रोजेक्टर, टैब लैब एवं कंप्यूटर लैब में आधुनिक शिक्षा प्रदान की जाती है।"
    },
    imageUrl: "./user_upload_4.png",
    icon: "smartClass"
  },
  {
    title: { en: "Classrooms", hi: "कक्षाएँ" },
    description: {
        en: "The classrooms are well-ventilated and equipped with electricity, fans, and lights, providing a comfortable and conducive learning environment.",
        hi: "कक्षाएं हवादार, विद्युत्, पंखे, बत्ती युक्त हैं। सीखने के लिए एक आरामदायक और अनुकूल वातावरण प्रदान करती हैं।"
    },
    imageUrl: "./user_upload_7.png",
    icon: "classrooms"
  },
  {
    title: { en: "Library", hi: "पुस्तकालय" },
    description: {
        en: "A library is available to cultivate the habit of reading books and to enhance knowledge among students.",
        hi: "छात्रों में किताबें पढ़ने की आदत को विकसित करने एवं ज्ञानवर्धन के लिए पुस्तकालय की व्यवस्था है।"
    },
    imageUrl: "./user_upload_9.png",
    icon: "library"
  },
  {
    title: { en: "Laboratory", hi: "प्रयोगशाला" },
    description: {
        en: "The school has well-equipped laboratories for Biology, Physics, and Chemistry.",
        hi: "विद्यालय में जीव विज्ञान, भौतिक विज्ञान, रसायन विज्ञान प्रयोगशाला की व्यवस्था है।"
    },
    imageUrl: "./user_upload_11.png",
    icon: "laboratory"
  },
  {
    title: { en: "Residential Facility", hi: "आवासीय व्यवस्था" },
    description: {
        en: "As the school is residential, a separate hostel built within the school premises is available for boys. The total capacity of the hostel is 490.",
        hi: "विद्यालय का स्वरूप आवासीय होने के कारण विद्यालय में निर्मित छात्रावास पृथक रूप से बालको के लिए उपलब्ध है। छात्रावास की कुल क्षमता 490 हैं।"
    },
    imageUrl: "./user_upload_15.png",
    icon: "residential"
  },
  {
    title: { en: "Mess Facility", hi: "मेस व्यवस्था" },
    description: {
        en: "A well-organized mess facility is ensured as per the prescribed menu. All students dine together in the dining hall of the mess.",
        hi: "विद्यालय में निर्धारित मेन्यू के अनुसार सुव्यवस्थित मेस व्यवस्था सुनिश्चित है। सभी छात्र-छात्राएं भोजनालय के डाइनिंग हाल में ही बैठकर भोजन करते हैं।"
    },
    imageUrl: "./user_upload_16.png",
    icon: "mess"
  },
];

export const academicsContent = {
    title: { en: 'Academics', hi: 'अकादमिक' },
    digitalEducation: {
        title: { en: 'Digital Education Initiative', hi: 'डिजिटल शिक्षा पहल' },
        description: {
            en: 'To improve mathematics, the Directorate of Social Welfare, Uttar Pradesh, Lucknow has arranged online education for students through Khan Academy. For other subjects (like Science, Social Science, etc.), online education is provided by Embibe. An English Literacy Program is being conducted to make the English subject easier. Through the Phulwari Project, students are given information to protect them from physical and mental exploitation and for their all-round development.',
            hi: 'गणित विषय को बेहतर बनाने हेतु निदेशालय समाज कल्याण उत्तर प्रदेश लखनऊ द्वारा खान एकेडेमी द्वारा छात्रों को ऑनलाइन शिक्षा की व्यवस्था भी की गयी है। अन्य विषयों (जैसे विज्ञान, सामाजिक विज्ञान आदि) एमबाइब द्वारा छात्रों को ऑनलाइन शिक्षा प्रदान की जा रही है, अंग्रेजी विषय को सुगम बनाने के लिए इंग्लिश लिट्रेसी प्रोग्राम संचालित किया जा रहा है, फुलवारी प्रोजेक्ट द्वारा छात्रों को शारीरिक एवं मानसिक शोषण से बचने एवं उनके सर्वांगीण विकास के लिए जानकारी दी जाती है।'
        }
    },
    faculties: {
        arts: {
            title: { en: 'Faculty of Arts', hi: 'कला संकाय' },
            subjects: {
                en: ["Hindi", "English", "Sociology", "Economics", "History", "Physical Education"],
                hi: ["हिंदी", "अंग्रेजी", "समाजशास्त्र", "अर्थशास्त्र", "इतिहास", "शारीरिक शिक्षा"]
            }
        },
        science: {
            title: { en: 'Faculty of Science', hi: 'विज्ञान संकाय' },
            subjects: {
                en: ["Hindi", "English", "Physics", "Chemistry", "Biology / Maths", "Physical Education"],
                hi: ["हिंदी", "अंग्रेजी", "भौतिक विज्ञान", "रसायन विज्ञान", "जीव विज्ञान / गणित", "शारीरिक शिक्षा"]
            }
        }
    }
};

export const staffContent = {
    title: { en: 'Academic Staff', hi: 'शैक्षणिक स्टाफ' },
    headers: {
        srNo: { en: 'Sr. No.', hi: 'क्रम सं०' },
        name: { en: 'Name', hi: 'नाम' },
        designation: { en: 'Designation', hi: 'पदनाम' },
        subject: { en: 'Subject', hi: 'विषय' },
    }
};

export const staffData: StaffMember[] = [
    { id: 1, name: "डॉ० दिनेश कुमार", designation: { en: "Acting Principal", hi: "प्र० प्रधानाचार्य" }, subject: { en: "History", hi: "इतिहास" } },
    { id: 2, name: "श्री पवन कुमार", designation: { en: "Lecturer", hi: "प्रवक्ता" }, subject: { en: "Biology", hi: "जीव विज्ञान" } },
    { id: 3, name: "श्री संजीव कुमार सौन्दर्य", designation: { en: "Lecturer", hi: "प्रवक्ता" }, subject: { en: "Sociology", hi: "समाजशास्त्र" } },
    { id: 4, name: "श्री खालिक अहमद", designation: { en: "Lecturer", hi: "प्रवक्ता" }, subject: { en: "Economics", hi: "अर्थशास्त्र" } },
    { id: 5, name: "श्री अनिल कुमार", designation: { en: "Lecturer", hi: "प्रवक्ता" }, subject: { en: "Chemistry", hi: "रसायन विज्ञान" } },
    { id: 6, name: "श्री आशु कुमार", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "Science", hi: "विज्ञान" } },
    { id: 7, name: "श्री हरदीप सिंह", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "Physical Education Teacher", hi: "व्यायाम शिक्षक" } },
    { id: 8, name: "श्रीमती प्रियंका शर्मा", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "Hindi", hi: "हिंदी" } },
    { id: 9, name: "श्रीमती करुणा रानी", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "Social Science", hi: "सामाजिक विज्ञान" } },
    { id: 10, name: "श्रीमती प्रियंका", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "English", hi: "अंग्रेजी" } },
    { id: 11, name: "श्री रजनीश कुमार", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "Social Science", hi: "सामाजिक विज्ञान" } },
    { id: 12, name: "श्रीमती प्रियंका त्यागी", designation: { en: "Assistant Teacher", hi: "सहायक अध्या०" }, subject: { en: "English", hi: "अंग्रेजी" } },
];


export const resultsContent = {
    title: { en: 'Exam Results Session', hi: 'परीक्षाफल सत्र' },
    class10: { en: 'Class 10', hi: 'कक्षा 10' },
    class12: { en: 'Class 12', hi: 'कक्षा 12' },
    labels: {
        totalStudents: { en: 'Total Students', hi: 'कुल छात्र' },
        passedStudents: { en: 'Passed Students', hi: 'उत्तीर्ण छात्र' },
        failedStudents: { en: 'Failed Students', hi: 'अनुत्तीर्ण छात्र' },
        compartment: { en: 'Compartment', hi: 'कम्पार्टमेंट' },
        passPercentage: { en: 'Pass Percentage', hi: 'कुल प्रतिशत' },
        top3: { en: 'Top 3 Students', hi: 'टॉप 03 छात्र' },
        noData: { en: 'No Data Available', hi: 'कोई डेटा नहीं' }
    }
}

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

export const galleryContent = {
    title: { en: 'Gallery', hi: 'गैलरी' }
};

export const galleryImages: GalleryImage[] = [
    { src: './user_upload_1.png', alt: { en: 'Morning Yoga Session', hi: 'प्रात:कालीन योगा' } },
    { src: './user_upload_3.png', alt: { en: 'Prayer Assembly', hi: 'प्रार्थना स्थल' } },
    { src: './user_upload_35.png', alt: { en: 'Cultural Program', hi: 'सांस्कृतिक कार्यक्रम' } },
    { src: './user_upload_13.png', alt: { en: 'Sports Event', hi: 'खेलों का आयोजन' } },
    { src: './user_upload_24.png', alt: { en: 'Tree Plantation Drive', hi: 'वृक्षारोपण' } },
    { src: './user_upload_19.png', alt: { en: 'Welcome Ceremony', hi: 'स्वागत समारोह' } },
    { src: './user_upload_28.png', alt: { en: 'Cleanliness Campaign', hi: 'स्वच्छता अभियान' } },
    { src: './user_upload_31.png', alt: { en: 'CBSE Program', hi: 'CBSE कार्यक्रम' } },
    { src: './user_upload_22.png', alt: { en: 'Scout Activities', hi: 'स्काउट' } },
    { src: './user_upload_42.png', alt: { en: 'Health Check-up', hi: 'स्वास्थ्य परीक्षण' } },
    { src: './user_upload_39.png', alt: { en: 'Anniversary Celebration', hi: 'जयंतिया समारोह' } },
    { src: './user_upload_17.png', alt: { en: 'Winter Clothes Distribution', hi: 'शीतकालीन वस्त्रों का वितरण' } },
    { src: './user_upload_5.png', alt: { en: 'Computer Lab', hi: 'कंप्यूटर लैब' } },
    { src: './user_upload_10.png', alt: { en: 'Science Project', hi: 'विज्ञान प्रोजेक्ट' } },
    { src: './user_upload_37.png', alt: { en: 'Independence Day', hi: 'स्वतंत्रता दिवस' } },
    { src: './user_upload_8.png', alt: { en: 'Classroom learning', hi: 'कक्षा में पढ़ाई' } },
];

export const footerContent = {
    copyright: {
        en: `All Rights Reserved.`,
        hi: `सर्वाधिकार सुरक्षित।`
    }
}
