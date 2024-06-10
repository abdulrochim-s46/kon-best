var fromUnit = document.getElementById('fromUnit').value;
var toUnit = document.getElementById('toUnit').value;
var from_fy = parseFloat(document.getElementById('from_fy').value);
var s_steel = parseFloat(document.getElementById('s_steel').value);
var to_fy = parseFloat(document.getElementById('to_fy').value);

var convertedValue;
var resultUnit = ' mm';

function konversi_pelat(){
    fromUnit = document.getElementById('fromUnit').value;
    toUnit = document.getElementById('toUnit').value;
    from_fy = parseFloat(document.getElementById('from_fy').value);
    s_steel = parseFloat(document.getElementById('s_steel').value);
    to_fy = parseFloat(document.getElementById('to_fy').value);

    // var convertedValue;
    // var resultUnit;

    // Perform conversion logic

    switch (fromUnit){
        case 'd6':
            if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd6' && to_fy != from_fy){
                convertedValue = 6. * 6. * 1000. * to_fy /  (6. * 6. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
            break;

        case 'd8':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd8' && to_fy != from_fy){
                convertedValue = 8. * 8. * 1000. * to_fy /  (8. * 8. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd10':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10' && to_fy != from_fy){
                convertedValue = 10. * 10. * 1000. * to_fy /  (10. * 10. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd13':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13' && to_fy != from_fy){
                convertedValue = 13. * 13. * 1000. * to_fy /  (13. * 13. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd16':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16' && to_fy != from_fy){
                convertedValue = 16. * 16. * 1000. * to_fy /  (16. * 16. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd19':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19' && to_fy != from_fy){
                convertedValue = 19. * 19. * 1000. * to_fy /  (19. * 19. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd22':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22' && to_fy != from_fy){
                convertedValue = 22. * 22. * 1000. * to_fy /  (22. * 22. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd25':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25' && to_fy != from_fy){
                convertedValue = 25. * 25. * 1000. * to_fy /  (25. * 25. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;

        case 'd29':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32'){
                convertedValue = 32. * 32. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29' && to_fy != from_fy){
                convertedValue = 29. * 29. * 1000. * to_fy /  (29. * 29. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
            }
        break;
        
        case 'd32':
            if (toUnit === 'd6'){
                convertedValue = 6. * 6. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            } else if (toUnit === 'd8'){
                convertedValue = 8. * 8. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd10'){
                convertedValue = 10. * 10. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd13'){
                convertedValue = 13. * 13. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd16'){
                convertedValue = 16. * 16. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd19'){
                convertedValue = 19. * 19. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd22'){
                convertedValue = 22. * 22. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd25'){
                convertedValue = 25. * 25. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd29'){
                convertedValue = 29. * 29. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else if (toUnit === 'd32' && to_fy != from_fy){
                convertedValue = 32. * 32. * 1000. * to_fy /  (32. * 32. * 1000. / s_steel * from_fy)
                // resultUnit = ' mm';
            }else{
                convertedValue = s_steel;
                // resultUnit = 'mm';
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
