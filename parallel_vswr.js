import { timenow } from './timenow.js';
import { f1 } from './vswr1_db1.js'
import { table_f_n }   from './table_f_n.js';
import { format1 } from './format1.js';
import { table_stp_n } from './table_stp_n.js';
import { LineLR } from './line_rl.js';
import { Ids } from './ids_stp_n.js';
import {  Creduce } from './freduce.js';
document.addEventListener("readystatechange", () => {
    console.log("document.readyState:", document.readyState);
    document.startViewTransition(() => { updateDOMToNewState(); });
    
    const explanationArea= document.getElementById("explanation");
    explanationArea.value = `Current readyState: ${document.readyState}\n`;
    explanationArea.value += `time: ${timenow()}\n`;
  
    const myForm = document.getElementById("vswrForm");
    window.addEventListener('keydown',function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    });
    const vf=1; // Eeff =1 
    
    let inputIds_f= [];
    let inputIds_ZL2_real= [];
    let inputIds_ZL2_imag= [];
    // let ZL2_real_array= [];
    // let ZL2_imag_array= [];
    // let Zin_r_array= [];
    // let Zin_x_array= [];
    // let vswr_array= [];
    // let db_array= [];
    // let g_array= [];
    
    
    const form= document.getElementById("vswrForm");
    const generatorR= document.getElementById("generatorR");
    
    const tbody = document.getElementById("frequencyTableBody");
    const frequency_n_input= document.getElementById("frequency_n");
    frequency_n_input.addEventListener("input", ()=>{
      tbody.replaceChildren(""); 
    });
    
    let f_n=1; // number of f
    const button_f_n= document.getElementById("button_f_n_table");
    button_f_n.addEventListener("click", ()=>{
      tbody.replaceChildren(""); 
      f_n= parseInt(frequency_n_input.value,10);
      console.log("button_f was clicked; f_n=", f_n);
// ids frequency table base names
      const frequency= "frequency";
      const load_real= "load_real";
      const load_imag= "load_imag";
      const table_ids=table_f_n.addRows(
          "frequencyTableBody", 
          f_n, 
          frequency, 
          load_real, load_imag);
      inputIds_f= table_ids.id_array_f;
      inputIds_ZL2_real= table_ids.id_array_r;
      inputIds_ZL2_imag= table_ids.id_array_x;
    });//end of frequences table
    
    const stp_tbody= document.getElementById("stpTableBody");
    const stp_n_input= document.getElementById("stp_n_input");
    stp_n_input.addEventListener("input", ()=> {
      stp_tbody.replaceChildren("");
    });
    let stp_n=1;
// ids stp_table base names
    const Rmin= "Rmin";
    const Rmax= "Rmax";
    const Lmin= "Lmin";
    const Lmax= "Lmax";
    const button_stp_n= document.getElementById("table_stp");
    button_stp_n.addEventListener("click", ()=> {
      stp_tbody.replaceChildren("");
      stp_n= parseInt(stp_n_input.value, 10); 
      console.log("button_stp_n was clicked; stp_n=", stp_n); 
      table_stp_n.addRows(
        "stpTableBody",
        stp_n, 
        Rmin, Rmax,
        Lmin, Lmax
      );
    });

    const result_vswr=  document.getElementById("result_vswr");
    result_vswr.textContent=`result_vswr  \n`;
    const result_vswr1= document.getElementById("result_vswr1");
    result_vswr1.textContent=`result_vswr1 \n`;
    const result_vswr2= document.getElementById("result_vswr2");
    result_vswr2.textContent=`result_vswr2 \n`;
    const result_vswr3= document.getElementById("result_vswr3");
    result_vswr3.textContent=`result_vswr3\n`;

    const people= [
        {name: "John", vswr: 3.,  line: { impedance: 40,    length: 80}},
        {name: "Jane", vswr: 2.5, line: { impedance: 45,    length: 70}},
        {name: "Jim",  vswr: 3.5, line: { impedance: 100,   length: 60}},
        {name: "Jill", vswr: 2.8, line: { impedance: 35,    length: 90}},
    ];
    
    
    let targetArray = []; 
// Find the object with the minimum numeric property (e.g., 'vswr)
    const minObject = people.reduce((min, obj) => 
      obj.vswr< min.vswr ? obj : min
);   
// Push object with min 'vswr' into the target array
    targetArray.push(minObject);
    result_vswr2.textContent+= JSON.stringify(targetArray[0], null, 2);

// insert new object in order for value of 'vswr'
    const array_length= people.length ;
    targetArray.length= 0; // Clear the target array
    
    function insertItem(arr, newItem, vswr) {
      let low = 0;
      let high = arr.length;
      let mid = 0;
      while (low<high) {
        mid = Math.floor((low+high)/2);
        if (arr[mid][vswr]< newItem[vswr]) {
          low= mid+1;
        } else {
          high=mid;
        }
      }// while
      arr.splice(low, 0, newItem);
      return arr;
    }
    targetArray.push(people[0]);
    for (let i=1; i<array_length; i++) {
      insertItem(targetArray, people[i], "vswr");
    }
    result_vswr3.textContent+= JSON.stringify(targetArray, null, 2);

    
    // const statusIndicator= document.getElementById("statusIndicator");
    // statusIndicator.replaceChildren("ready");
    // let currentState= "ready";
    
    function formatNumber(value) {
      return Number.isFinite(value) ? 
          +value.toFixed(2): "NaN";
    }
    
    function updateResult() 
    {
      let vswr_k=[];
      let z01_k=[];
      let z02_k=[];
      let l01_k=[];
      let l02_k=[];
      const { id_rmin, id_rmax, id_lmin, id_lmax}= Ids.ids_stp_n(stp_n);
      
      let k=3;
      explanationArea.value= `k= ${k}\n`;
      let result_array_all=[];
      let targetArr = [];
     
      for (let k=0; k<3; k++) {

        let Z01_array= [];
        let length1_array=[];
        let Z02_array=[];
        let length2_array=[];
        let Zin_r_array= [];
        let Zin_x_array= [];
        let vswr_array= [];
        let db_array= [];
        let g_array= [];
        let vswr_max=1;
        for (let j=0; j<stp_n;j++) {
          const {Z01, Z02, length1, length2} = LineLR
            .line1_lr(id_rmin, id_rmax, id_lmin, id_lmax,j);
          Z01_array[j]= Z01;
          length1_array[j]= length1;
          Z02_array[j]= Z02;
          length2_array[j]= length2;
          // let lines= `R[1,${j+1}]=${format1.fzin_r(Z01)} Ω,L[1,${j+1}]=${format1.f_l(length1)} mm,`;
          // lines+=` R[2,${j+1}]=${format1.fzin_r(Z02)} Ω, L[2,${j+1}]=${format1.f_l(length2)} mm`;
          let lines= `R[1,${j+1}]=${format1.fzin_r(Z01)} Ω, L[1,${j+1}]=${length1.toFixed(2)} mm,`;
          lines+=` R[2,${j+1}]=${format1.fzin_r(Z02)} Ω, L[2,${j+1}]=${length2.toFixed(2)} mm`;
          explanationArea.value+= `${lines}\n`; 
        } // end of for j
        try 
        {
          const Z0=  parseFloat(generatorR.value);
          console.log("updateResult; Z0:", Z0, " f_n:", f_n);

          result_vswr.textContent= "";
          
          for (let i=0; i< f_n; i++) 
            {
              const frequencyInput= document.getElementById(inputIds_f[i]);
              const frequency= parseFloat(frequencyInput.value);
              const load_real= document.getElementById(inputIds_ZL2_real[i]);
              const ZL2_real= parseFloat(load_real.value);
              const load_imag= document.getElementById(inputIds_ZL2_imag[i]);
              const ZL2_imag= parseFloat(load_imag.value);
              
              console.log("updateResult; frequency:", frequency);
              // console.log("updateResult; ZL2_real:", ZL2_real," ZL2_imag:", ZL2_imag);
      
              const vswrData= f1.vswr1_db1(
                  Z0, 
                  frequency, ZL2_real, ZL2_imag,
                  vf ,
                  stp_n,
                  Z01_array, Z02_array, length1_array, length2_array
              );
              if (!vswrData || vswrData.vswr === Infinity || vswrData.vswr<1.0) {
                throw new Error("updateResult;Invalid vswrData returned from vswr1_db1.");
              }
              vswr_array[i]=  format1.fvswr(vswrData.vswr);
              db_array[i]=    format1.fdb(vswrData.db);
              g_array[i]=     format1.fg(vswrData.gamma);
              Zin_r_array[i]= format1.fzin_r(vswrData.Zin_parallel.real);
              Zin_x_array[i]= format1.fzin_x(vswrData.Zin_parallel.imag);
              
             
              console.log("updateResult; vswr:", vswr_array[i]," |Γ|:",g_array[i]," db:", db_array[i]);
            
            } //end of for loop over f_n
            const vswr_max= Math.max(...vswr_array);
            explanationArea.value+= ` VSWR= ${vswr_max} is maximum for ${f_n} frequencies\n`;   
            //  `f= ${frequency}MHz${spaces}Zin_r=${Zin_r_array[i]}` +
            //     `${spaces}Zin_x=${Zin_x_array[i]} Ω\n`;
            vswr_k[k]=vswr_max;
            z01_k[k]= Z01_array;
            z02_k[k]= Z02_array;
            l01_k[k]= length1_array;
            l02_k[k]= length2_array;
            result_array_all.push({vswr: vswr_max, z01: Z01_array, z02: Z02_array, l01: length1_array, l02: length2_array});

        } //end of try
        catch (error) {
          result_vswr.textContent = "parallel_vswr;Error of calculations .";
          explanationArea.value += error.message;
        }// end of catch
        const arr_length=0;
        if (k==0) {
          targetArr.push(result_array_all[0]);
        }
        else { 
          // arr_length= result_array_all.length ; 
          insertItem(targetArr, result_array_all[k], "vswr");
        }
        /**
         const array_length= people.length ;
    targetArray.length= 0; // Clear the target array
    
    function insertItem(arr, newItem, vswr) {
      let low = 0;
      let high = arr.length;
      let mid = 0;
      while (low<high) {
        mid = Math.floor((low+high)/2);
        if (arr[mid][vswr]< newItem[vswr]) {
          low= mid+1;
        } else {
          high=mid;
        }
      }// while
      arr.splice(low, 0, newItem);
      return arr;
    }
    targetArray.push(people[0]);
    for (let i=1; i<array_length; i++) {
      insertItem(targetArray, people[i], "vswr");
    }
    result_vswr3.textContent+= JSON.stringify(targetArray, null, 2);
         */
      } //end of k
      result_vswr3.textContent+= JSON.stringify(targetArray, null, 2);
       const spaces = " ".repeat(3);
              result_vswr.textContent+= `vswr=${result_array_all[0].vswr}${spaces}Z01=${result_array_all[0].z01.join(',')}/n`;
              result_vswr.textContent+=`Z02=${result_array_all[0].z02.join(',')}${spaces}`;
              result_vswr.textContent+=`L01=${result_array_all[0].l01.join(',')}${spaces}L02=${result_array_all[0].l02.join(',')}\n`;
              // result_array_all[0];
            //  result_vswr.textContent= JSON.stringify(result_array_all, null, 2); 

              // `f= ${frequency}MHz${spaces}vswr: ${vswr_array[i]}${spaces}`+ 
              //   ` db= ${db_array[i]}dB${spaces}(|Γ| = ${g_array[i]})\n`;

    } //end of updateResult
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      updateResult();
    });

});

