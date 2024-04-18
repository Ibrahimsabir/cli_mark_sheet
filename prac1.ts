#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const TotalMarks: number = 300

let MarksObtained = await inquirer.prompt([
    {
       name:"physicsMarks",
       type:"number",
       message:"How many marks in physics you obtained?"
    },
    {
       name:"chemistryMarks",
       type:"number",
       message:"How many marks in chemistry you obtained?"

    },
    {
       name:"mathsMarks",
       type:"number",
       message:"How many marks in maths you obtained?"
    }
])

let physicsMarks: number= MarksObtained.physicsMarks
let chemistryMarks: number= MarksObtained.chemistryMarks
let mathsMarks: number= MarksObtained.mathsMarks
console.log(chalk.bold.green(`Physics Marks: ${physicsMarks}`))
console.log(chalk.bold.green(`Chemistry Marks: ${chemistryMarks}`))
console.log(chalk.bold.green(`Maths Marks: ${mathsMarks}`))
let MarksObtainedTotal = physicsMarks+chemistryMarks+mathsMarks
console.log(chalk.bold.blue(`Total Marks Obtained: ${MarksObtainedTotal}`))
let percentageObtained = MarksObtainedTotal/TotalMarks *100 
console.log(chalk.bold.blue(`Percentage Obtained: ${percentageObtained.toFixed(2)} %`))


switch (true){
    case (percentageObtained >= 80) :
        console.log(chalk.bold.blue(`GRADE: "A+"`))
        break;
        case (percentageObtained>=70):
            console.log(chalk.bold.blue(`GRADE: "A"`))
            break;
            case (percentageObtained>=60):
                console.log(chalk.bold.blue(`GRADE: "B"`))
                break;
                case (percentageObtained>=50):
                    console.log(chalk.bold.blue(`GRADE: "C"`))  
                    break;
                    case (percentageObtained>=0):
                        console.log(chalk.bold.blue(`You have failed in the exams`))
                        break;                   
       default:
        
}