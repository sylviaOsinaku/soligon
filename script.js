'use strict';
const account1 = {
  names: 'Osinaku Ugonna sylvia',
  phoneNumber: '07019118771',
  lga: 'oguta',
  state: 'imo',
  gender: 'female',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  password: 1111,
  subjects: ['maths', 'physics', 'chemisty', 'English'],
  scores: [93, 84, 70, 67],
  regNumber: '202210725000DA ',
  dateOfBirth: '2/3/2005',
  Email: 'osinakusylvia@gmai.com',
  contactAdd: '17, Emmanuel street , Bariga Lagos.',
};
const account2 = {
  names: 'Alfred Aanuouwaopo Opeyemi',
  phoneNumber: '07014579290',
  Email: 'opeyemialfred24@gmail.com',
  lga: 'Okiti-Pupa',
  state: 'Ondo',
  gender: 'female',
  movements: [500, 450, -100, 3000, -650, -130, 70, 2000],
  password: 2222,
  subjects: ['Biology', 'physics', 'chemisty', 'English'],
  scores: [95, 84, 70, 67],
  regNumber: '202210643531BF',
  dateOfBirth: '27/6/2004',
  contactAdd: '7b, Toluwase Street,Oworoshoki,Berger bus-stop, lagos,Nigeria.',
};

const account3 = {
  names: 'Madubugo Paschal Tochukwu',
  phoneNumber: '08134565345',
  lga: 'ogu',
  state: 'imo',
  gender: 'male',
  movements: [600, 450, -400, 1000, -650, -130, 70, 7500],
  password: 3333,
  subjects: ['Biology', 'physics', 'chemisty', 'English'],
  scores: [91, 89, 70, 77],
  regNumber: '2022DVTT6988CF',
  dateOfBirth: '10/3/2004',
  Email: 'paschal@gmail.com',
  contactAdd: '19,  Ebute-meta, Lagos.',
};

const account4 = {
  names: 'Kenechukwu Chris Chisom',
  phoneNumber: '09123453695',
  lga: 'Nsukka',
  state: 'Enugu',
  gender: 'male',
  movements: [600, 450, -400, 1000, -650, -130, 70, 7500],
  password: 4444,
  subjects: ['Mathematics', 'physics', 'chemisty', 'English'],
  scores: [99, 89, 70, 75],
  regNumber: '2022E8PO345GH',
  dateOfBirth: '05/10/2003',
  Email: 'chrisKen@gmail.com',
  contactAdd: '2a, Adedirin street , Fetac town Lagos.',
};

const account5 = {
  names: 'Ugochukwu Ogonna Mneoma',
  phoneNumber: '09087636222',
  lga: 'oguta',
  state: 'imo',
  gender: 'female',
  movements: [30, 8500, -400, 1000, -600, -330, 70, 1500],
  password: 5555,
  subjects: ['Biology', 'physics', 'chemisty', 'English'],
  scores: [90, 85, 77, 75],
  regNumber: '2022D1RT62345EJG',
  dateOfBirth: '17/11/2004',
  Email: 'ogonna23@gmail.com',
  contactAdd: '23b, Bassey duke, new-haven Enugu.',
};

const account6 = {
  names: 'Ononobi Favor Chimela',
  phoneNumber: '07040066427',
  lga: 'oru east',
  state: 'imo',
  gender: 'male',
  movements: [20, 9500, -400, 3000, -600, -330, 70, 1700],
  password: 6666,
  subjects: ['Maths', 'physics', 'chemisty', 'English'],
  scores: [83, 82, 80, 62],
  regNumber: '2022108024446CA',
  dateOfBirth: '18/04/2005',
  Email: 'imela25@gmail.com',
  contactAdd: '41, Oshipitan, Shomolu Lagos.',
  image: function () {
    // return this.gender === 'male' ? 'male avtar' : 'female avatar';
    if (this.gender === 'female') {
      return 'female avartar';
    } else if (this.gender === 'male') {
      return 'male avatar';
    }
  },
};

const body = document.querySelector('body');
const thedDate = document.querySelector('.date');

const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const formHeader = document.querySelector('.form');

const btnLogIn = document.querySelector('.button-log-in');
const inputUserName = document.querySelector('.input-username');
const userPassword = document.querySelector('.password');
const welcome = document.querySelector('.welcome');
const fullName = document.querySelector('.fullname');
const eyeImage = document.querySelector('.fa-eye');

const myProfile = document.querySelector('.My-Profile');
const profiles = document.querySelector('.profile');
const detailedProfile = document.querySelector('.detailed-profile');
const profileImage = document.querySelector('.profile-image');

const myScores = document.querySelector('.my-score-div');
const scoreDisplay = document.querySelector('.score-display');
const scoreProfiles = document.querySelector('.score-profile');
const scoreRowDiv = document.querySelector('.score-row');
const tables = document.querySelector('table');
const totalScores = document.querySelector('.total');

const bankDivBox = document.querySelector('.my-bank');
const myBank = document.querySelector('.my-bank-div');
const bankWelcome = document.querySelector('.bank-welcome');
const movementContainer = document.querySelector('.movement-container');
const bankBalance = document.querySelector('.balance');

const income = document.querySelector('.income');
const outcome = document.querySelector('.outcome');
const interest = document.querySelector('.interest');

const transferUserName = document.querySelector('.input-transfer-username');
const transferAmount = document.querySelector('.input-tranfer-amount');
const btnTransfer = document.querySelector('.transfer-button');

const loanAmount = document.querySelector('.input-loan-amount');
const btnLoan = document.querySelector('.request-loan');

const closeuserName = document.querySelector('.input-close-username');
const closeUserPin = document.querySelector('.input-close-pin');
const btnCloseAccount = document.querySelector('.close-account');

const accounts = [account1, account2, account3, account4, account5, account6];

let currentAccount;

menu.addEventListener('click', function () {
  formHeader.style.display = 'flex';
  menu.style.display = 'none';
  closeBtn.classList.remove('hidden');
});

const closeSideBar = function () {
  formHeader.style.display = 'none';
  menu.style.display = 'block';
};

closeBtn.addEventListener('click', function () {
  closeSideBar();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeSideBar();
  }
});

const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.names
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};
createUserName(accounts);

eyeImage.addEventListener('click', function () {
  if (userPassword.type === 'password') {
    userPassword.type = 'text';
  } else {
    userPassword.type = 'password';
  }
});

const displayProfileImage = function (acc) {
  profileImage.src = `images/profile-picture-${acc.username}.jpeg`;

  // profileImage.src = `images/undraw_pic_profile_re_lxn6.svg`
};

const displayDetailedProfile = function (acc) {
  detailedProfile.innerHTML = '';
  const firstHtml = ` <div>
  <h3>Registration Number</h3>
  <p>${acc.regNumber}</p>
</div>
<div class="names first-name">
  <h3 class="">First Name</h3>
  <p>${acc.names.split(' ')[1]}</p>
</div>
<div>
  <h3>Middle Name</h3>
  <p>${acc.names.split(' ')[2]}</p>
</div>
<div>
  <h3>Last Name</h3>
  <p>${acc.names.split(' ')[0]}</p>
</div>

<div>
  <h3>Mobile Number</h3>
  <p>${acc.phoneNumber}</p>
</div>

<div>
  <h3>State of Origin</h3>
  <p>${acc.state}</p>
</div>
<div>
  <h3>Local Government</h3>
  <p>${acc.lga}</p>
</div>
<div>
  <h3>Gender</h3>
  <p>${acc.gender}</p>
</div>
<div>
<h3>Date of birth</h3>
<p>${acc.dateOfBirth}</p>
</div>
<div>
<h3>Email</h3>
<p>${acc.Email}</p>
</div>
<div>
<h3>Contact address:</h3>
<p>${acc.contactAdd}</p>
</div>
`;
  detailedProfile.insertAdjacentHTML('afterbegin', firstHtml);
};

const displayScoresProfile = function (acc) {
  const paddedRegNum = acc.regNumber
    .slice(-4)
    .padStart(acc.regNumber.length, '*');
  console.log(paddedRegNum);
  scoreProfiles.innerHTML = '';
  const scoreProfile = ` <div>
  <div>
    <p>Name: ${acc.names}</p>
  </div>
  <div>
    <p>Reg Number: ${paddedRegNum}</p>
  </div>
</div>`;
  scoreProfiles.insertAdjacentHTML('afterbegin', scoreProfile);
};

const displaySubjects = function (subjectNames, grades) {
  tables.innerHTML = '';
  const subjectsHtml = ` 
  <table>
  <tr>
    <th>Subject</th>
    <th>Score</th>
  </tr>
  <div class="score-row">
    <tr>
      <td class="subject">${subjectNames[0]}</td>
      <td class="score">${grades[0]}</td>
    </tr>
    <tr>
      <td class="subject">${subjectNames[1]}</td>
      <td class="score">${grades[1]}</td>
    </tr>
    <tr>
      <td class="subject">${subjectNames[2]}</td>
      <td class="score">${grades[2]}</td>
    </tr>
    <tr>
      <td class="subject">${subjectNames[3]}</td>
      <td class="score">${grades[3]}</td>
    </tr>
  </div>
</table>
 `;
  tables.insertAdjacentHTML('afterbegin', subjectsHtml);
};
const calcTotal = function (acc) {
  acc.total = acc.scores.reduce((acc, cur) => acc + cur, 0);
  totalScores.textContent = `Total Score: ${acc.total}`;
};

const displayMovements = function (theMovements) {
  movementContainer.innerHTML = '';
  theMovements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdraw';
    const movementsHtml = ` <div class="movement movement-type-${type}">
    <p class="${type}">${i + 1} ${type}</p>
    <p class="value">${mov}</p>
  </div>

    `;
    movementContainer.insertAdjacentHTML('afterbegin', movementsHtml);
  });
};

const calcIncome = function (movement) {
  const theIncome = movement
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  income.textContent = `$${theIncome}`;
};

const calcOutcome = function (movement) {
  const theOutcome = movement
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  outcome.textContent = `$${theOutcome}`;
};

const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  bankBalance.textContent = `$${acc.balance}`;
};

const optionDates = {
  minute: 'numeric',
  hour: 'numeric',
  weekday: 'long',
  // weekday: 'numeric',
  month: 'long',
  year: 'numeric',
};

const displayDateHeader = function () {
  const locale = navigator.language;
  const myDates = Intl.DateTimeFormat(locale, optionDates).format(new Date());
  return myDates;
};

btnLogIn.addEventListener('click', function (e) {
  e.preventDefault();
  myBank.classList.add('hidden');
  profiles.classList.add('hidden');
  profiles.style.display = 'none';
  scoreDisplay.classList.add('hidden');
  currentAccount = accounts.find(acc => acc.username === inputUserName.value);
  console.log(currentAccount);
  if (currentAccount?.password === Number(userPassword.value)) {
    calcTotal(currentAccount);
    inputUserName.blur();
    userPassword.blur();
    welcome.textContent = `Welcome ${currentAccount.names}`;
    thedDate.textContent = displayDateHeader();
    //profiles.style.opacity = '0';
    scoreDisplay.classList.add('hidden');
    myProfile.addEventListener('click', function () {
      myBank.classList.add('hidden');
      profiles.classList.remove('hidden');
      profiles.style.display = 'grid';
      scoreDisplay.classList.add('hidden');
      fullName.textContent = currentAccount.names;
      console.log('My-Profile');
      displayProfileImage(currentAccount);
      displayDetailedProfile(currentAccount);
    });
    myScores.addEventListener('click', function () {
      myBank.classList.add('hidden');
      profiles.classList.add('hidden');
      profiles.style.display = 'none';
      scoreDisplay.classList.remove('hidden');
      displayScoresProfile(currentAccount);
      displaySubjects(currentAccount.subjects, currentAccount.scores);
      calcTotal(currentAccount);
    });
    bankDivBox.addEventListener('click', function () {
      profiles.classList.add('hidden');
      profiles.style.display = 'none';
      scoreDisplay.classList.add('hidden');
      myBank.classList.remove('hidden');
      bankWelcome.textContent = `Welome to your bank, ${
        currentAccount.names.split(' ')[0]
      }`;
      displayMovements(currentAccount.movements);
      calcBalance(currentAccount);
      calcIncome(currentAccount.movements);
      calcOutcome(currentAccount.movements);
    });
  }
  inputUserName.value = userPassword.value = '';
});
btnTransfer.addEventListener('click', function (e) {
  const amount = Number(transferAmount.value);
  e.preventDefault();
  const theRecieversAccount = accounts.find(
    acc => transferUserName?.value === acc.username
  );
  console.log(theRecieversAccount);
  if (
    currentAccount?.balance > amount &&
    theRecieversAccount !== currentAccount
  ) {
    console.log(true);
    currentAccount?.movements.push(-amount);
    theRecieversAccount?.movements.push(amount);
    console.log(currentAccount?.movements);
    console.log(theRecieversAccount?.movements);
  }
  displayMovements(currentAccount.movements);
  calcBalance(currentAccount);
  calcIncome(currentAccount.movements);
  calcOutcome(currentAccount.movements);
  transferAmount.value = transferUserName.value = '';
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(loanAmount.value);
  const deposits = currentAccount.movements.filter(mov => mov > 0);

  if (deposits.some(money => money > loan * 0.01)) {
    currentAccount.movements.push(loan);
  }
  displayMovements(currentAccount.movements);
  calcBalance(currentAccount);
  calcOutcome(currentAccount.movements);
  calcIncome(currentAccount.movements);
});
btnCloseAccount.addEventListener('click', function (e) {
  e.preventDefault();
  const closeAccount = accounts.findIndex(
    acc => acc.username === closeuserName.value
  );
  if (
    currentAccount.username === closeuserName.value &&
    currentAccount.password === Number(closeUserPin.value)
  ) {
    // accounts.splice(closeAccount, 1);
  }
});
