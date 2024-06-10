var fromUnit = document.getElementById('fromUnit').value;
var toUnit = document.getElementById('toUnit').value;
var from_fy = parseFloat(document.getElementById('from_fy').value);
var n_steel = parseFloat(document.getElementById('n_steel').value);
var to_fy = parseFloat(document.getElementById('to_fy').value);

var convertedValue;
var resultUnit = ' batang';

function konversi_kolom(){
    fromUnit = document.getElementById('fromUnit').value;
    toUnit = document.getElementById('toUnit').value;
    from_fy = parseFloat(document.getElementById('from_fy').value);
    n_steel = parseFloat(document.getElementById('n_steel').value);
    to_fy = parseFloat(document.getElementById('to_fy').value);

    // var convertedValue;
    // var resultUnit;

    // Perform conversion logic

    switch (fromUnit){
        case 'd6':
            if (toUnit === 'd8'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (8. * 8. * to_fy)
            } else if (toUnit === 'd10'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 6. * 6. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd6' && to_fy != from_fy){
                convertedValue = 6. * 6. * n_steel * from_fy /  (6. * 6. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd8':
            if (toUnit === 'd6'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd10'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 8. * 8. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd8' && to_fy != from_fy){
                convertedValue = 8. * 8. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd10':
            if (toUnit === 'd6'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 10. * 10. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd10' && to_fy != from_fy){
                convertedValue = 10. * 10. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd13':
            if (toUnit === 'd6'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 13. * 13. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd13' && to_fy != from_fy){
                convertedValue = 13. * 13. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd16':
            if (toUnit === 'd6'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 16. * 16. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd16' && to_fy != from_fy){
                convertedValue = 16. * 16. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd19':
            if (toUnit === 'd6'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 19. * 19. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd19' && to_fy != from_fy){
                convertedValue = 19. * 19. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd22':
            if (toUnit === 'd6'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 22. * 22. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd22' && to_fy != from_fy){
                convertedValue = 22. * 22. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd25':
            if (toUnit === 'd6'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 25. * 25. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd25' && to_fy != from_fy){
                convertedValue = 25. * 25. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd29':
            if (toUnit === 'd6'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd32'){
                convertedValue = 29. * 29. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else if (toUnit === 'd29' && to_fy != from_fy){
                convertedValue = 29. * 29. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;

        case 'd32':
            if (toUnit === 'd6'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (6. * 6. * to_fy)
            } else if (toUnit === 'd8'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (8. * 8. * to_fy)
            }else if (toUnit === 'd10'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (10. * 10. * to_fy)
            }else if (toUnit === 'd13'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (13. * 13. * to_fy)
            }else if (toUnit === 'd16'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (16. * 16. * to_fy)
            }else if (toUnit === 'd19'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (19. * 19. * to_fy)
            }else if (toUnit === 'd22'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (22. * 22. * to_fy)
            }else if (toUnit === 'd25'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (25. * 25. * to_fy)
            }else if (toUnit === 'd29'){
                convertedValue = 32. * 32. * n_steel * from_fy /  (29. * 29. * to_fy)
            }else if (toUnit === 'd32' && to_fy != from_fy){
                convertedValue = 32. * 32. * n_steel * from_fy /  (32. * 32. * to_fy)
            }else{
                convertedValue = n_steel;
            }
        break;
    }

    document.getElementById('result').value = convertedValue.toFixed(0) + ' ' + resultUnit;
    
}

function saveStaticDataToFile(){
    // // Requiring fs module in which
    // // writeFile function is defined.
    // const fs = require('fs')

    // // Data which will write in a file.
    // let data = "Learning how to write in a file."

    // // Write data in 'Output.txt' .
    // fs.writeFile('Output.txt', data, (err) => {

    //     // In case of a error throw err.
    //     if (err) throw err;
    // })

    var blob = new Blob(["Welcome......!"],
        { type: "text/plain;charset=utf-8"});
    
    saveAs(blob, "static.txt");

}

function Laporan(){
    // saveStaticDataToFile();
    var textarea =
    document.getElementById('textarea');
    textarea.value = "Laporan Perhitungan\n"
        +
        "diameter = 10 mm\n"
        +
        "dikonversi menjadi diameter = 8 mm\n"
        +
        "hasil hitung = " + convertedValue.toFixed(0) + ' ' + resultUnit
    ;
}
