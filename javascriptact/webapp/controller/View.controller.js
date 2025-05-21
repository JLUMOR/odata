sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.acn.training.javascriptact.controller.View", {
  
      onConvertToWords: function() {
        const number = parseInt(this.byId("inputNumber").getValue());
        if (isNaN(number) || number < 1 || number > 999) {
          this.byId("resultWords").setValue("Invalid input.");
          return;
        }
  
        const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
        let word = "";
  
        if (Math.floor(number / 100) > 0) {
          word += ones[Math.floor(number / 100)] + " Hundred ";
        }
  
        const rem = number % 100;
        if (rem > 0) {
          if (rem < 10) {
            word += ones[rem];
          } else if (rem >= 10 && rem < 20) {
            word += teens[rem - 10];
          } else {
            word += tens[Math.floor(rem / 10)] + " " + ones[rem % 10];
          }
        }
  
        this.byId("resultWords").setValue(word.trim());
      },
  
      onPrintInvertedTriangle: function() {
        const height = parseInt(this.byId("inputHeight1").getValue());
        if (isNaN(height) || height < 1) {
          this.byId("resultInvertedTriangle").setValue("Invalid height.");
          return;
        }
  
        let pattern = "";
        let spaces = 0;
        let stars = height;
  
        while (stars > 0) {
          pattern += " ".repeat(spaces * 2) + "* ".repeat(stars).trim() + "\n";
          stars--;
          spaces++;
        }
  
        this.byId("resultInvertedTriangle").setValue(pattern.trim());
      },
  
      onPrintXPattern: function() {
        const height = parseInt(this.byId("inputHeight2").getValue());
        if (isNaN(height) || height < 1 || height % 2 === 0) {
          this.byId("resultXPattern").setValue("Height must be a positive odd number.");
          return;
        }
      
        let pattern = "";
        for (let i = 0; i < height; i++) {
          let row = "";
          for (let j = 0; j < height; j++) {
            row += (j === i || j === height - i - 1) ? "*" : " ";
          }
          pattern += row + "\n";
        }
      
        this.byId("resultXPattern").setValue(pattern);
      },
  
      onCalculatePerimeter: function() {
        const a = parseFloat(this.byId("inputSide1").getValue());
        const b = parseFloat(this.byId("inputSide2").getValue());
        const c = parseFloat(this.byId("inputSide3").getValue());
  
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
          this.byId("textPerimeterResult").setText("Invalid sides.");
          return;
        }
  
        const perimeter = a + b + c;
        this.byId("textPerimeterResult").setText("Perimeter: " + perimeter);
      },
  
      onShowColorChoices: function() {
        const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
        const o = ["th", "st", "nd", "rd"];
        let output = "";
  
        for (let i = 0; i < color.length; i++) {
          let suffix = o[(i + 1) % 10] || "th";
          if (i + 1 === 1) suffix = "st";
          else if (i + 1 === 2) suffix = "nd";
          else if (i + 1 === 3) suffix = "rd";
          else suffix = "th";
  
          output += `${i + 1}${suffix} choice is ${color[i]}.\n`;
        }
  
        this.byId("textColorChoicesResult").setValue(output.trim());
      },
  
      onShowHighestSkills: function() {
        const record = [
          {
            Name: "Gibo",
            Age: 16,
            SkillSet: [{ Skill: "SAP UI5" }, { Skill: "SAP HANA" }]
          },
          {
            Name: "Patrick",
            Age: 22,
            SkillSet: [{ Skill: "SAP UI5" }, { Skill: "SAP HANA" }, { Skill: "SAP ABAP" }]
          },
          {
            Name: "MJ",
            Age: 24,
            SkillSet: [{ Skill: "SAP HANA" }]
          }
        ];
  
        let max = 0;
        let result = "";
  
        for (let i = 0; i < record.length; i++) {
          if (record[i].SkillSet.length > max) {
            max = record[i].SkillSet.length;
            result = `Name: ${record[i].Name}\nAge: ${record[i].Age}`;
          }
        }
  
        this.byId("textHighestSkillResult").setText(result);
      }
  
    });
  });
  