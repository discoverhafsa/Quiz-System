import inquirer from "inquirer";

async function AskQuestions(){
    
    const answers = await inquirer.prompt([
        {
            name:"question1",
            type: "list",
            choices: ["Amazon", "Microsoft", "oracle", "TypeScript"],
            message: "which of the following companies has developed TypeScript"
        },
        {
            name:"question2",
            type:"list",
            choices: ["Gradual", "Duck", "Dynamic", "All of the above"],
            message:"What is the typing principle of TypeScript"
        },
        {
            name:"question3",
            type:"list",
            choices: ["tt", "tx", "nod", "ts"],
            message:"which of the following file name is extension of TypeScript"
        },
        {
            name:"question4",
            type:"list",
            choices: ["JavaScript", "c++", "java", "All of the above"],
            message:"which of the computer language has influenced creation of TypeScript"
        }
    ])

    const marks = 10
    const fail = 0
    if(answers.question1 === "Microsoft"){
        console.log ("Answer is correct");
    } else () => {
        console.log("Answer is wrong");
    }
    if(answers.question2 === "Dynamic"){
        console.log ("Answer is correct");
    } else () => {
        console.log("Answer is wrong");
    }
    if(answers.question3 === "ts"){
        console.log ("Answer is correct");
    } else () => {
        console.log("Answer is wrong");
    }
    if(answers.question4 === "JavaScript"){
        console.log ("Answer is correct");
    } else () => {
        console.log("Answer is wrong");
    }
}
AskQuestions()