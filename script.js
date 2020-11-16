$('tbody tr').on('click', function(){ // table row is clicked
  var hiddenRow = $(this).next(".hidden-row" ); // variable that finds the hidden content for clicked row
  var rowExists = $(hiddenRow).length; // variable that figures out if the collapsible row already exists or not
  if (rowExists) { // if collapsible row exists already
    $('tbody .hidden-row').not(hiddenRow).hide(); // hide all open toggle-able rows
    $(hiddenRow).toggle(); // toggle the row on or off
  } else { // if collapsible row doesn't exist
    var expRowContent = $(this).find('.hidden-row-content').html(); // grab this row's hidden content and store in a variable
    var newExpRow = '<tr class="hidden-row" style="display:none;"><td colspan="9">' + expRowContent + '</td></tr>'; // wrap hidden content in a table row
    $(newExpRow).insertAfter(this); // insert the collapsible table row after the clicked row
    $('tbody .hidden-row').not(hiddenRow).hide(); // hide all open toggle-able rows
    $(this).next('.hidden-row').toggle();  // toggle the row on 
  }
});


// list.js settings
var options = {
  valueNames: [ 'Order_ID', 'Customer_Name','Trust_Score', 'Order_Date','Number_Product','Order_Value','Status','Coupon', 'hidden-info' ]
};

var userList = new List('users', options);