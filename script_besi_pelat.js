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

    // document.getElementById('result').value = convertedValue.toFixed(0) + ' ' + resultUnit;
    document.getElementById('result').value = Math.floor(convertedValue) + ' ' + resultUnit;
    
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
    var dia_From = 0.;
    var dia_To = 0.;

    if (fromUnit === 'd6'){
        dia_From = 6.;
    } else if (fromUnit === 'd8'){
        dia_From = 8.;
    }else if (fromUnit === 'd10'){
        dia_From = 10.;
    }else if (fromUnit === 'd13'){
        dia_From = 13.;
    }else if (fromUnit === 'd16'){
        dia_From = 16.;
    }else if (fromUnit === 'd19'){
        dia_From = 19.;
    }else if (fromUnit === 'd22'){
        dia_From = 22.;
    }else if (fromUnit === 'd25'){
        dia_From = 25.;
    }else if (fromUnit === 'd29'){
        dia_From = 29.;
    }else if (fromUnit === 'd32'){
        dia_From = 32.;
    }

    if (toUnit === 'd6'){
        dia_To = 6.;
    } else if (toUnit === 'd8'){
        dia_To = 8.;
    }else if (toUnit === 'd10'){
        dia_To = 10.;
    }else if (toUnit === 'd13'){
        dia_To = 13.;
    }else if (toUnit === 'd16'){
        dia_To = 16.;
    }else if (toUnit === 'd19'){
        dia_Frdia_Toom = 19.;
    }else if (toUnit === 'd22'){
        dia_To = 22.;
    }else if (toUnit === 'd25'){
        dia_To = 25.;
    }else if (toUnit === 'd29'){
        dia_To = 29.;
    }else if (toUnit === 'd32'){
        dia_To = 32.;
    }

    var textarea =
    document.getElementById('textarea');
    textarea.value = 
    "LAPORAN PERHITUNGAN\n\n" +
    "data besi awal (sebelum konversi):\n" +
    "diameter = " + fromUnit + " mm\n" +
    "mutu besi = " + from_fy + " MPa\n" +
    "jarak besi = " + s_steel.toFixed(0) + " mm\n\n" +

    "data besi rencana konversi:\n" +
    "diameter = " + toUnit + " mm\n" +
    "mutu besi = " + to_fy + " MPa\n\n" +
    "perhitungan jarak besi konversi:\n" +
    "s = dia_konversi * dia_konversi * 1000. * fy_awal / (dia_awal * dia_awal * 1000. / jarak_awal * fy_konversi ) \n" +
    "  = " + dia_To + " * " + dia_To + " * " + 1000. + " * " + to_fy + " / " + "(" + dia_From + " * " + dia_From + " * " + 1000. + " / " + s_steel + " * " + from_fy + ")" + "\n" +
    "  = " + (dia_To * dia_To * 1000. * to_fy /  (dia_From * dia_From * 1000. / s_steel * from_fy)).toFixed(2) + " mm\n" +
    "sehingga, jarak pakai maksimum sebesar " + Math.floor(convertedValue) + " mm"
    ;
}


// var fromUnit = document.getElementById('fromUnit').value;
// var toUnit = document.getElementById('toUnit').value;
// var from_fy = parseFloat(document.getElementById('from_fy').value);
// var s_steel = parseFloat(document.getElementById('s_steel').value);
// var to_fy = parseFloat(document.getElementById('to_fy').value);