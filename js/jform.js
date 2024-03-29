   function JForm() {
       this.dClass = 'form-control';
       this.priBtn = 'btn btn-primary';
       this.fClass = 'form';
       this.empty = '';
   }

   //OPEN A FORM   
   JForm.prototype.openForm = function (jAction, jMethod, jId, jClass, jName) {
       var j = '<form action="' + jAction + '" class="' + jMethod + '" name="' + jName + '"  id="' + jId + '" />';
       return j;
   }


   //MAKE A LABEL
   JForm.prototype.formLabel = function (jText, jClass) {
       var j = '<label clas="' + jClass + '">' + jText + '</label>';
       return j;
   }

   //TEXT INPUT
   JForm.prototype.inputText = function (jId, jClass, jName, jPh, jVal, jRequire) {
       var j = '<input type="text" id="' + jId + '" class="' + jClass + '" name="' + jName + '" placeholder="' + jPh + '" value="' + jVal + '" ' + jRequire + ' />';
       return j;
   }

   //GENERIC INPUT (email, search, tel, url, etc)
   JForm.prototype.genInput = function (jType, jId, jClass, jName, jPh, jVal, jRequire) {
       var j = '<input type="' + jType + '" class="' + jClass + '" name="' + jName + '" placeholder="' + jPh + '" value="' + jVal + '" ' + jRequire + ' />';
       return j;
   }

   //NUMBER INPUT
   JForm.prototype.numInput = function (jId, jClass, jName, jMin, jMax, jStep, jRequire) {
       var j = '<input type="number" id="' + jId + '" class="' + jClass + '" name="' + jName + '" min="' + jMin + '" max="' + jMax + '"  step="' + jStep + '"' + jRequired + '>';
       return j;
   }

   //DATE INPUT
   JForm.prototype.dateInput = function (jId, jClass, jName, jMin, jMax, jRequire) {
       var j = '<input type="date" class="' + jClass + '" name="' + jName + '" min="' + jMin + '" max="' + jMax + '" id="' + jId + '" ' + jRequire + ' />';
       return j;
   }

   //COLOR INPUT
   JForm.prototype.colorInput = function (jId, jClass, jName, jRequire) {
       var j = '<input type="color" class="' + jClass + '" name="' + jName + '"  id="' + jId + '" ' + jRequire + ' />';
       return j;
   }

   //MONTH INPUT
   JForm.prototype.monthInput = function (jId, jClass, jName, jRequire) {
       var j = '<input type="month" class="' + jClass + '" name="' + jName + '"  id="' + jId + '" ' + jRequire + ' />';
       return j;
   }

   //WEEK INPUT
   JForm.prototype.weekInput = function (jId, jClass, jName, jRequire) {
       var j = '<input type="week" class="' + jClass + '" name="' + jName + '"  id="' + jId + '" ' + jRequire + ' />';
       return j;
   }

   //RANGE INPUT
   JForm.prototype.rangeInput = function (jId, jClass, jName, jMin, jMax, jStep, jRequire) {
       var j = '<input type="range" id="' + jId + '" class="' + jClass + '" name="' + jName + '" min="' + jMin + '" max="' + jMax + '"  step="' + jStep + '"' + jRequired + '>';
       return j;
   }

   //RADIO BUTTON
   JForm.prototype.radioInput = function (jId, jClass, jName, jVal, jChkd, jRequire) {
       var j = '<input id="' + jId + '" class="' + jClass + '" type="radio" name="' + jName + '" value="' + jVal + '" ' + jChkd + ' ' + jRequire + '> ';
       return j;
   }
   
   
   
   
   


           //OPEN A FORM   
           JForm.prototype.openForm = function (jAction, jMethod, jId, jClass, jName) {
               var j = '<form action="' + jAction + '" method="' + jMethod + '" id="' + jId + '" class="' + jClass + '"  name="' + jName + '"  />';
               return j;
           }

           //TEXT INPUT
           JForm.prototype.inputText = function (jId, jClass, jName, jPh, jVal, jRequire) {
               var j = '<input type="text" id="' + jId + '" class="' + jClass + '" name="' + jName + '" placeholder="' + jPh + '" value="' + jVal + '" ' + jRequire + ' />';
               return j;
           }

           //PASSWORD INPUT
           JForm.prototype.inputPassword = function (jId, jClass, jName, jPh, jVal, jRequire) {
               var j = '<input type="password" id="' + jId + '" class="' + jClass + '" name="' + jName + '" placeholder="' + jPh + '" value="' + jVal + '" ' + jRequire + ' />';
               return j;
           }

           //GENERIC INPUT (email, search, tel, url, etc)
           JForm.prototype.genInput = function (jType, jId, jClass, jName, jPh, jVal, jRequire) {
               var j = '<input type="' + jType + '" id="' + jId + '" class="' + jClass + '" name="' + jName + '" placeholder="' + jPh + '" value="' + jVal + '" ' + jRequire + ' />';
               return j;
           }
  


           //HIDDEN INPUT 
           JForm.prototype.hiddenInput = function (jId, jName, jVal) {
               var j = '<input type="hidden" id="' + jId + '" name="' + jName + '" value="' + jVal + '" />';
               return j;
           }

           //NUMBER INPUT
           JForm.prototype.numInput = function (jId, jClass, jName, jMin, jMax, jStep, jRequire) {
               var j = '<input type="number" id="' + jId + '" class="' + jClass + '" name="' + jName + '" min="' + jMin + '" max="' + jMax + '"  step="' + jStep + '"' + jRequire + '>';
               return j;
           }


           //DATETIME INPUT
           JForm.prototype.dateTimeInput = function (jId, jClass, jName, jRequire) {
               var j = '<input type="datetime-local" class="' + jClass + '" name="' + jName + '" id="' + jId + '" ' + jRequire + ' />';
               return j;
           }

           //TIME INPUT
           JForm.prototype.timeInput = function (jId, jClass, jName, jRequire) {
               var j = '<input type="time" class="' + jClass + '" name="' + jName + '" id="' + jId + '" ' + jRequire + ' />';
               return j;
           }

           //DATE INPUT
           JForm.prototype.dateInput = function (jId, jClass, jName, jMin, jMax, jRequire) {
               var j = '<input type="date" class="' + jClass + '" name="' + jName + '" min="' + jMin + '" max="' + jMax + '" id="' + jId + '" ' + jRequire + ' />';
               return j;
           }

           //COLOR INPUT
           JForm.prototype.colorInput = function (jId, jClass, jName, jRequire) {
               var j = '<input type="color" class="' + jClass + '" name="' + jName + '"  id="' + jId + '" ' + jRequire + ' />';
               return j;
           }

           //MONTH INPUT
           JForm.prototype.monthInput = function (jId, jClass, jName, jRequire) {
               var j = '<input type="month" class="' + jClass + '" name="' + jName + '"  id="' + jId + '" ' + jRequire + ' />';
               return j;
           }

           //WEEK INPUT
           JForm.prototype.weekInput = function (jId, jClass, jName, jRequire) {
               var j = '<input type="week" class="' + jClass + '" name="' + jName + '"  id="' + jId + '" ' + jRequire + ' />';
               return j;
           }

           //RANGE INPUT
           JForm.prototype.rangeInput = function (jId, jClass, jName, jMin, jMax, jStep, jRequire) {
               var j = '<input type="range" id="' + jId + '" class="' + jClass + '" name="' + jName + '" min="' + jMin + '" max="' + jMax + '"  step="' + jStep + '"' + jRequire + '>';
               return j;
           }

           //RADIO BUTTON
           JForm.prototype.radioInput = function (jId, jClass, jName, jVal, jChkd, jRequire) {
               var j = '<input id="' + jId + '" class="' + jClass + '" type="radio" name="' + jName + '" value="' + jVal + '" ' + jChkd + ' ' + jRequire + '> ';
               return j;
           }

           //CHECKBOX
           JForm.prototype.checkBoxInput = function (jId, jClass, jName, jVal, jChkd, jRequire) {
               var j = '<input id="' + jId + '" class="' + jClass + '" type="checkbox" name="' + jName + '" value="' + jVal + '" ' + jChkd + ' ' + jRequire + '> ';
               return j;
           }
          
           //TEXTAREA
           JForm.prototype.textArea = function (jId, jClass, jName, jHtchml, jRequire) {
               var j = '<textarea id="' + jId + '" class="' + jClass + '" name="' + jName + '" ' + jRequire + '>' + jHtchml + '</textarea>';
               return j;
           }


           //SELECT LIST
           JForm.prototype.selectList = function (jId, jClass, jName, jVals = [['', '']], jRequire) {
               var j = '<select id="' + jId + '" class="' + jClass + '" name="' + jName + '" ' + jRequire + '>';
               for (var i = 0; i < jVals.length; i++) {
                   j += '<option ="' + jVals[i][0] + '">' + jVals[i][1] + '</option>';
               }
               j += '</select>';
               return j;
           }

           //LINE BREAK
           JForm.prototype.br = function () {
               var j = '</br>';
               return j;
           }

           //SUBMIT BUTTON
           JForm.prototype.submitBtn = function (jName, jId, jClass, jVal) {
               var j = '<input type="submit" name="' + jName + '" value="' + jVal + '" class="' + jClass + '" id="' + jId + '">';
               return j;
           }

           //CLOSE FORM
           JForm.prototype.closeForm = function () {
               var j = '</form>';
               return j;
           }

           //HTML ELEMENTS
           //GET HTML Element by ID
           JForm.prototype.getElem = function (jId) {
               var j = document.getElementById(jId);
               return j;
           }

           //GET HTML Elements by class name returns array
           JForm.prototype.getByClass = function (jClass) {
               var j = document.getElementsByClassName(jClass);
               return j;
           }

           //GET HTML Elements by tag name returns array
           JForm.prototype.getByTag = function (jTag) {
               var j = document.getElementsByTagName(jTag);
               return j;
           }

           //SHOW VIEW
           JForm.prototype.showView = function (jId, jView) {
               document.getElementById(jId).innerHTML = jView;
           }
