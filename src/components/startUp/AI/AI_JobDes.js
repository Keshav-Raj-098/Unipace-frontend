
import {GoogleGenerativeAI} from "@google/generative-ai"
// import {JobDescription} from "./Aipopup"
  
  
const New_Jd = async (oldDescription)=>{
  const apiKey = "AIzaSyAiGvQf_r1QNuY-nWp_BVhM82xdD-dlxoM";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  // Define the prompt template
  
  const template = `
  Here is the Object 
  
    {
      "Designation":,
      "Duration":,
      "Stipend":,
      "noOfOffers":,
      "SkillsRequired":,
      "JobLocation":,
      "Responsibilities":,
      "PartTime/FullTime":,
      "AssignementandSubmissionDetails":,
      "Deadline":,
      "SelectionProcess":,
    }
    
    Here is the Job Description :-
  
    ${oldDescription}
    
  
  I have provide an object and then the Job Description, please provide me only the filled object that I have provided. Don't write anything other than that. Also, if anything is not present in the description but required in the object, then put null at that position. If there are more inputs in an object input field, then put them in an array also add the listing number in the starting of the sentence. Also in partTime/FullTime field, if Fulltime then put true otherwise false; otherwise, leave it unfilled.
  
  You have to give the output as i need to convert it into json using JSON.parse() & i don,t want to get any error so please checkout
  `;
  
  
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(template);

    
  // console.log(result.response.text());

  
    var  jsonData = {};
    
    try {
      return jsonData = JSON.parse(result.response.text());
      
      
    } catch (error) {
      console.error("Invalid JSON string:", error);
    }
    

}

async function getData(JobDescription) {

  const res = await New_Jd(JobDescription);
  
  const newdata = { 
    designation: res["Designation"],
    duration: res["Duration"],
    stipend: res["Stipend"],
    noOfOffers: res["noOfOffers"],
    skillsRequired: res["SkillsRequired"],
    jobLocation: res["JobLocation"],
    responsibilitie: res["Responsibilities"],
    hoursType: res["PartTime/FullTime"],
    assignment: res["Responsibilities"],
    selectionProcess: res["SelectionProcess"],
    deadline: res["Deadline"]
  };
  console.log(newdata);
   return newdata;
};

export default getData;

