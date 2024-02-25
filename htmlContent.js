const questionHtml = ({ questionOne, questionTwo, questionThree }) =>
    `<form id="questionForm">
   <div>
      <input
         type="radio"
         name="question"
         value="${questionOne}"
         id="question"
         onClick="handleQuestion()"
         />
      <label for="question">${questionOne}</label>
   </div>
   <div>
      <input
         type="radio"
         name="question"
         value="${questionTwo}"
         id="question-first"
         onClick="handleQuestion()"
         />
      <label for="question-first">${questionTwo}</label>
   </div>
   <div>
      <input
         type="radio"
         name="question"
         value="${questionThree}"
         id="collegeName2"
         onClick="handleQuestion()"
         />
      <label for="question-second">${questionThree}</label>
   </div>

</form>`;
// SEM I FORM
let bcaFirstSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1101</td>
                <td>Business and technical communication skills</td>
            </tr>
            <tr>
                <td>1102</td>
                <td>Problem Solving using C</td>
            </tr>
            <tr>
                <td>1103</td>
                <td>Web Programming</td>
            </tr>
            <tr>
                <td>1104</td>
                <td>Computer Fundamentals and Operating System</td>
            </tr>
            <tr>
                <td>1105</td>
                <td>Office Automation Tools</td>
            </tr>
            <tr>
                <td>1201</td>
                <td>Problem Solving using C Lab</td>
            </tr>
            <tr>
                <td>1202</td>
                <td>Web Programming Lab</td>
            </tr>
        </tbody>
    </table>`;

// SEM II FORM

let bcaSecondSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2101</td>
                <td>environmental science & rti</td>
            </tr>
            <tr>
                <td>2102</td>
                <td>programming methodology and c++</td>
            </tr>
            <tr>
                <td>2103</td>
                <td>database management system</td>
            </tr>
            <tr>
                <td>2104</td>
                <td>mathematics i</td>
            </tr>
            <tr>
                <td>2105</td>
                <td>principles & practice of accounting</td>
            </tr>
            <tr>
                <td>2201</td>
                <td>programming methodology and c++ lab</td>
            </tr>
            <tr>
                <td>2202</td>
                <td>database management system lab</td>
            </tr>
        </tbody>
    </table>`;

// SEM III

let bcaThirdSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3101</td>
                <td>data structures</td>
            </tr>
            <tr>
                <td>3102</td>
                <td>java programming</td>
            </tr>
            <tr>
                <td>3103</td>
                <td>mathematics ii</td>
            </tr>
            <tr>
                <td>3104</td>
                <td>computer organisation & architecture</td>
            </tr>
            <tr>
                <td>3201</td>
                <td>data structures lab</td>
            </tr>
            <tr>
                <td>3202</td>
                <td>java programming lab</td>
            </tr>

        </tbody>
    </table>`;

// SEM IV

let bcaFourthSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>4101</td>
                <td>python programming</td>
            </tr>
            <tr>
                <td>4102</td>
                <td>introduction to microprocessor</td>
            </tr>
            <tr>
                <td>4103</td>
                <td>computer networks</td>
            </tr>
            <tr>
                <td>4104</td>
                <td>software engineering</td>
            </tr>
            <tr>
                <td>4201</td>
                <td>python programming lab</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>introduction to microprocessor lab</td>
            </tr>

        </tbody>
    </table>`;

// SEM V
let bcaFifthSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5101</td>
                <td>mobile application</td>
            </tr>
            <tr>
                <td>5102</td>
                <td>artificial intelligence</td>
            </tr>
            <tr>
                <td>5103</td>
                <td>cyber security</td>
            </tr>
            <tr>
                <td>5104</td>
                <td>multimedia and application</td>
            </tr>
            <tr>
                <td>5105</td>
                <td>elective1-management information system</td>
            </tr>
            <tr>
                <td>5106</td>
                <td>elective 2 - search engine optimization</td>
            </tr>
            <tr>
                <td>5107</td>
                <td>elective 3 - data analysis and visualization</td>
            </tr>
            <tr>
                <td>5108</td>
                <td>mobile (android) application lab</td>
            </tr>
        </tbody>
    </table>`;

// SEM VI
let bcaSixthSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>6101</td>
                <td>cyber laws and intelligent property rights</td>
            </tr>
            <tr>
                <td>6102</td>
                <td>data warehousing & data mining</td>
            </tr>
            <tr>
                <td>6103</td>
                <td>iot</td>
            </tr>
            <tr>
                <td>6104</td>
                <td>elective 1 - machine learning</td>
            </tr>
            <tr>
                <td>6105</td>
                <td>elective 2 - block chain technology</td>
            </tr>
            <tr>
                <td>6106</td>
                <td>elective 3 - big data & cloud computing</td>
            </tr>
            <tr>
                <td>6107</td>
                <td>project</td>
            </tr>
        </tbody>
    </table>`;
// BCS SYLLUBUS END .. 
// MCS SYLLUBUS START
let McaFirstSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
                <th>Type Of Course</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>pg1.1</td>
                <td>operating systems</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg1.2</td>
                <td>data communications and networking</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg1.3</td>
                <td>data structures and analysis of algorithm</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg1.4</td>
                <td>data structures and analysis of algorithm- lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg1.5</td>
                <td>operating systems-lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg1.6</td>
                <td>elective-i-g</td>
                <td>Major (Elective)</td>
            </tr>
            <tr>
                <td>pg1.7</td>
                <td>research methodology</td>
                <td>Minor Stream (RM)</td>
            </tr>
        </tbody>
    </table>`;

let McaSecondSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
                <th>Type Of Course</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>pg2.1</td>
                <td>Data Warehousing and Data Mining</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg2.2</td>
                <td>Database Management Systems</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg2.3</td>
                <td>Introduction to Microprocessors</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg2.4</td>
                <td>Database Management Systems-Lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg2.5</td>
                <td>Web Technology-Lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg2.6</td>
                <td>Elective-II-</td>
                <td>Major (Elective)</td>
            </tr>
            <tr>
                <td>pg2.7</td>
                <td>OJT/RP</td>
                <td>RP/OJT</td>
            </tr>
        </tbody>
    </table>`;

let McaThirdSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
                <th>Type Of Course</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>pg3.1</td>
                <td>Big Data Analytics</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg3.2</td>
                <td>Machine Learning</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg3.3</td>
                <td>Data Science</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg3.4</td>
                <td>Big Data Analytics-Lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg3.5</td>
                <td>Machine Learning-Lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg3.6</td>
                <td>Elective-III</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg3.7</td>
                <td>RP</td>
                <td>RP</td>
            </tr>
        </tbody>
    </table>`;

let McaFourthSemTable = ` <table>
        <thead>
            <tr>
                <th>Subject Code</th>
                <th>Subject</th>
                <th>Type Of Course</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>pg4.1</td>
                <td>Deep Learning</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg4.2</td>
                <td>Natural Language Processing</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg4.3</td>
                <td>Mobile Application Development using Android Programming</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg4.4</td>
                <td>Natural Language Processing-Lab</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg4.5</td>
                <td>Elective-IV/(MOOC/Swayam)</td>
                <td>Major (Core)</td>
            </tr>
            <tr>
                <td>pg4.6</td>
                <td>OJT/RP</td>
                <td>OJT/RP</td>
            </tr>
        </tbody>
    </table>`;

// ELECTIVE SUBJECTS
let McaElectiveSemTable = ` <table>
        <thead>
            <tr>
                <th>Elective-I</th>
                <th>Elective-II</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.Cyber Security</td>
                <td>1.Cyber Security</td>
            </tr>
            <tr>
                <td>2.Digital Image Processing</td>
                <td>2.Project Management</td>
            </tr>
            <tr>
                <td>3.Software Engineering</td>
                <td>3. Fuzzy Logic & Neural Network</td> 
            </tr>
            <tr>
                <td>4.Artificial Intelligence</td>
                <td>4.IoT</td>
            </tr>
        </tbody>
    </table>`;


let McaElective1SemTable = ` <table>
        <thead>
            <tr>
                <th>Elective-III</th>
                <th>Elective-IV</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.Blockchain</td>
                <td>1.Information Security</td>
            </tr>
            <tr>
                <td>2.GIS and Remote Sensing</td>
                <td>2.Digital Forensics</td>
            </tr>
            <tr>
                <td>3.SoftwareTesting</td>
                <td>3.Agile Methodology</td>
            </tr>
            <tr>
                <td>4.Robotic Process Automation</td>
                <td>4.Cloud Computing</td>
            </tr>
        </tbody>
    </table>`;

// MCS SYLLUBUS END
exports = {
    questionHtml,
    bcaFirstSemTable, bcaSecondSemTable, bcaThirdSemTable, bcaFourthSemTable, bcaFifthSemTable, bcaSixthSemTable,
    McaFirstSemTable, McaSecondSemTable, McaThirdSemTable, McaFourthSemTable, McaElectiveSemTable, McaElective1SemTable,
};
