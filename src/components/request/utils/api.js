export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const otherData = {
  profile: "other-profile",
  profileAnswer: "profile-other-answer",
  industry: "other-industry",
  industryAnswer: "other-industry-answer"
};

export const companyProfileLeft = {
  academia: ["profile-academia", "Academia / Education"],
  research: ["profile-research", "Research Institute"],
  engineering: ["profile-engineering", "Engineering Design / Consulting"],
  manufacturing: ["profile-manufacturing", "Manufacturing"],
  reseller: ["profile-reseller", "Reseller / Purchasing Agency"]
};

export const companyProfileRight = {
  personal: ["profile-personal", "Personal Use"],
  fabLab: ["profile-fablab", "Fab Lab"],
  tools: ["profile-tools", "Tools & Machines"],
  incubator: ["profile-incubator", "Incubator / Accelerator"]
};

export const industrySegmentLeft = {
  automotive: ["industry-automotive", "Automotive"],
  aerospace: ["industry-aerospace", "Aerospace / Defense"],
  pharma: ["industry-pharma", "Pharma / Medtech"],
  consumer: ["industry-consumer", "Consumer Electronics"],
  sport: ["industry-sport", "Sport / Wellness"]
};
export const industrySegmentRight = {
  education: ["industry-education", "Education"],
  energy: ["industry-energy", "Energy / Environment"],
  mining: ["industry-mining", "Mining / Oil & Gas"],
  transportation: ["industry-transportation", "Transportation"]
};

export function extractCompanyProfile() {
  let profile = "";
  profile += document.getElementById(companyProfileLeft.academia[0]).checked ? `${companyProfileLeft.academia[1]}, ` : "";
  profile += document.getElementById(companyProfileLeft.research[0]).checked ? `${companyProfileLeft.research[1]}, ` : "";
  profile += document.getElementById(companyProfileLeft.engineering[0]).checked ? `${companyProfileLeft.engineering[1]}, ` : "";
  profile += document.getElementById(companyProfileLeft.manufacturing[0]).checked ? `${companyProfileLeft.manufacturing[1]}, ` : "";
  profile += document.getElementById(companyProfileLeft.reseller[0]).checked ? `${companyProfileLeft.reseller[1]}, ` : "";
  profile += document.getElementById(companyProfileRight.personal[0]).checked ? `${companyProfileRight.personal[1]}, ` : "";
  profile += document.getElementById(companyProfileRight.fabLab[0]).checked ? `${companyProfileRight.fabLab[1]}, ` : "";
  profile += document.getElementById(companyProfileRight.tools[0]).checked ? `${companyProfileRight.tools[1]}, ` : "";
  profile += document.getElementById(companyProfileRight.incubator[0]).checked ? `${companyProfileRight.incubator[1]}, ` : "";
  profile += document.getElementById(otherData.profile).checked ? document.getElementById(otherData.profileAnswer).value : "";
  return profile;
}

export function extractIndustrySegment() {
  let industry = "";
  industry += document.getElementById(industrySegmentLeft.automotive[0]).checked ? `${industrySegmentLeft.automotive[1]}, ` : "";
  industry += document.getElementById(industrySegmentLeft.aerospace[0]).checked ? `${industrySegmentLeft.aerospace[1]}, ` : "";
  industry += document.getElementById(industrySegmentLeft.pharma[0]).checked ? `${industrySegmentLeft.pharma[1]}, ` : "";
  industry += document.getElementById(industrySegmentLeft.consumer[0]).checked ? `${industrySegmentLeft.consumer[1]}, ` : "";
  industry += document.getElementById(industrySegmentLeft.sport[0]).checked ? `${industrySegmentLeft.sport[1]}, ` : "";
  industry += document.getElementById(industrySegmentRight.education[0]).checked ? `${industrySegmentRight.education[1]}, ` : "";
  industry += document.getElementById(industrySegmentRight.energy[0]).checked ? `${industrySegmentRight.energy[1]}, ` : "";
  industry += document.getElementById(industrySegmentRight.mining[0]).checked ? `${industrySegmentRight.mining[1]}, ` : "";
  industry += document.getElementById(industrySegmentRight.transportation[0]).checked ? `${industrySegmentRight.transportation[1]}, ` : "";
  industry += document.getElementById(otherData.industry).checked ? document.getElementById(otherData.industryAnswer).value : "";
  return industry;
}
