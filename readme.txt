form
git remote add origin https://github.com/perlov3301/fn_lr_delta.git
to
echo "# delta260824" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/perlov3301/delta260824.git
git push -u origin main

(Z_L = 75 - j25), (Z_0 = 50) vswr=1.77_
zl=9.33-39.2i z0=50 vswr =  8.7250
z0=50 Z_L = 100 + j25  VSWR=2.16
Z₀ = 100 Ω, Zᴸ = 40 + j70 Ω, line length = 0.3λ → VSWR = 3.86 

  gamma:   db     vswr
 v*0.099 -0.043  1.22
 v*0.2   -0.177  1.5
 v*0.3   -0.41   1.86
 v*0.333 -0.51   2.0
 v*0.5   -1.25   3.0
 v*0.59  -1.87   3.87
 v*0.706 -3.00   5.8
 v*0.949 -10.0   38
 v*0.95  -10.1   39
 v*0.972 -12.6   70
 v*0.9802  -14.1  100
 v*0.99    -17.03   199
 v*0.995   -20      399
 v*0.998   -24      999

zin
zin2 ro50l36=100-j0
ro=100 l=52.8626 zin1=j200 zin_parallel=80+j40 vswr=2.16 db=-.63 0.368
ro=100 l=37.5 zin1 = j100 zin_parallel=50+j50 vswr=2.62 db=-0.97 g=0.447
// 1. Your array of input IDs
const inputIds = ['input1', 'input2', 'input3'];

// 2. Map through IDs, get their values, and convert them to numbers
const numbersArray = inputIds.map(id => {
  const inputElement = document.getElementById(id);
  
  // Use Number() to convert the string value into a number
  return inputElement ? Number(inputElement.value) : 0; 
});

console.log(numbersArray); // Output: [10, 25, 42]
   
if i am confident that all IDs exist on the page:
const numbersArray = inputIds.map(id => 
    Number(document.getElementById(id)?.value || 0));
input attributes: accept,alpha, alt, autocapitalize, autocomplete,
  capture, checked, colorspace,dirname, disabled, form, formaction,
  formenctype, formmethod, formnovalidate, formtarget, height, list,
  max, maxlength, min, minlength, multiple, name, pattern, placeholder,
  popovertarget, popovertargetaction, readonly, required, size, src,
  step, switch, type, value, width.
Ethan Bortnick - Piano Prodigy 
Marie Salomea Sklodowska shared a deeply collaborative and devoted 
relationship with Pierre Curie, both professionally and personally. 
The couple married in 1895 and had two daughters.Historical records 
indicate their relationship was one of respect and deep affection.
Four years after his death, she rented an appartment near Sorbonne
to meet with Langevin, former Pierre's student.The relationship 
became a national sensation when Langevin's wife partly intercepted
partly discovered intimate love letters from Curie to Langevin .The
media judged harshly Marie Curie, painted the Polish-born widow as  
a foreign "home-wrecker" and suggested she was Jew .Even worse, in
late 1911, the Nobel Committee for Chemistry requested that Curie 
refrain from attending the award ceremony to "avoid the controversy". 
She notably refused, stating that her "personal life" had no bearing 
on her "scientific work" and received her second Nobel Prize.

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote set-url origin
 https://github.com/perlov3301/fn_lr_delta260726.git

git push -u origin main
https://github.com/perlov3301/fn_lr_delta260726.git

Jaguar3698
function costFunction(steps, freqPassSet, freqStopSet, RLpassTarget, RLstopTarget) {
  let costPass = 0, costStop = 0;

  for (const f of freqPassSet) {
    const RL = returnLossDb(steps, f);
    const deficit = Math.max(0, RLpassTarget - RL);   // penalize under-matching only
    costPass += deficit * deficit;
  }
  costPass /= freqPassSet.length;

  for (const f of freqStopSet) {
    const RL = returnLossDb(steps, f);
    const deficit = Math.max(0, RL - RLstopTarget);   // penalize insufficient rejection only
    costStop += deficit * deficit;
  }
  costStop /= freqStopSet.length;

  return costPass + costStop;   // equal weighting by default; see below
}
f= 1000MHz   vswr: 1.97    db= -0.492dB   (|Γ| = 0.327)
f= 1160MHz   vswr: 1.298    db= -0.074dB   (|Γ| = 0.13)
f= 1350MHz   vswr: 2.48    db= -0.863dB   (|Γ| = 0.424)
R[1,1]=24.3 Ω, L[1,1]=69.96 mm, R[2,1]=43.5 Ω, L[2,1]=76.18 mm
R[1,2]=45.8 Ω, L[1,2]=77.13 mm, R[2,2]=40.9 Ω, L[2,2]=50.09 mm
 VSWR= 2.48 is maximum for 3 frequencies 59th click
R[1,1]=117 Ω, L[1,1]=84.74 mm, R[2,1]=97 Ω, L[2,1]=60.78 mm
R[1,2]=85 Ω, L[1,2]=53.07 mm, R[2,2]=85 Ω, L[2,2]=37.26 mm
 VSWR= 2.35 is maximum for 3 frequencies 80th click
R[1,1]=118 Ω, L[1,1]=63.27 mm, R[2,1]=83 Ω, L[2,1]=84.49 mm
R[1,2]=61.9 Ω, L[1,2]=57.57 mm, R[2,2]=91 Ω, L[2,2]=52.35 mm
 VSWR= 1.79 is maximum for 3 frequencies 100th click

 const variations = [
  { configId: "A", speed: 50, price: 199, latency: 15 },
  { configId: "B", speed: 120, price: 89, latency: 45 }, // ← Lowest price
  { configId: "C", speed: 80, price: 149, latency: 22 }
];

// 2. Search for the minimum value and extract its parameter object
const lowestPriceConfig = variations.reduce((minItem, currentItem) => {
  return currentItem.price < minItem.price ? currentItem : minItem;
}, variations[0]);

console.log(lowestPriceConfig);
// Output: { configId: 'B', speed: 120, price: 89, latency: 45 }

https://www.facebook.com/stories/1796471293749776/UzpfSVNDOjE3ODQ3OTk0MTkyMDU2ODk=/?view_single=1
drkirkby@kirkbymicrowave.co.uk

function insertInOrder(arr, newItem, vswr) {
  let low = 0;
  let high = arr.length;
  let mid = 0;
  // binary search of index
  while (low< high) {
    mid = Math.floor((low+high)/2);
    if (arr[mid][vswr]<newItem[vswr]) {
      low= mid+1;
    } else {
      high=mid;
    }
  }// end of while
  // insert the item at the found index
  // splice(start, number of elements to remove, items to inject)
  
  arr.splice(low, 0, newItem);
  // option of delete one item =last item if length>10
  // length_arr= arr.length;
  //arr.splice((length_arr-1),1);
  // or arr.pop()
  return arr;

}// end of function
or add object with min vswr into targe array
const sourceArray = [
  { id: 1, score: 45 },
  { id: 2, score: 12 },
  { id: 3, score: 78 }
];
const targetArray = [];

// Find the object with the minimum numeric property (e.g., 'score')
const minObject = sourceArray.reduce((min, obj) => 
  obj.score < min.score ? obj : min
);

// Push that object into the target array
targetArray.push(minObject);

console.log(targetArray); 
// [{ id: 2, score: 12 }]