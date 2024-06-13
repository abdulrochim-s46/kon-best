// var steelType = document.getElementById('steelType').value;
var fromUnit = document.getElementById('fromUnit').value;
var toUnit = document.getElementById('toUnit').value;
var from_fy = parseFloat(document.getElementById('from_fy').value);
var n_steel_From = parseFloat(document.getElementById('n_steel_From').value);
var n_steel_To = parseFloat(document.getElementById('n_steel_To').value);
var s_steel = parseFloat(document.getElementById('s_steel').value);
var to_fy = parseFloat(document.getElementById('to_fy').value);

var convertedValue;
var resultUnit = '';

function konversi_sengkang_kolom(){
    // steelType = document.getElementById('steelType').value;
    fromUnit = document.getElementById('fromUnit').value;
    toUnit = document.getElementById('toUnit').value;
    from_fy = parseFloat(document.getElementById('from_fy').value);
    n_steel_From = parseFloat(document.getElementById('n_steel_From').value);
    n_steel_To = parseFloat(document.getElementById('n_steel_To').value);
    s_steel = parseFloat(document.getElementById('s_steel').value);
    to_fy = parseFloat(document.getElementById('to_fy').value);

    // var convertedValue;
    // var resultUnit;

    // Perform conversion logic
    resultUnit = ' mm';
    switch (fromUnit){
        case 'd6':
            if (toUnit === 'd8'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) * (8. * 8. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd10'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) * (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd6' && to_fy != from_fy){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd6' && n_steel_From != n_steel_To){
                convertedValue = 1./ (6. * 6. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd8':
            if (toUnit === 'd6'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd10'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd8' && to_fy != from_fy){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd8' && n_steel_From != n_steel_To){
                convertedValue = 1./ (8. * 8. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd10':
            if (toUnit === 'd6'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10' && to_fy != from_fy){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10' && n_steel_From != n_steel_To){
                convertedValue = 1./ (10. * 10. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd13':
            if (toUnit === 'd6'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13' && to_fy != from_fy){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13' && n_steel_From != n_steel_To){
                convertedValue = 1./ (13. * 13. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd16':
            if (toUnit === 'd6'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16' && to_fy != from_fy){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16' && n_steel_From != n_steel_To){
                convertedValue = 1./ (16. * 16. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd19':
            if (toUnit === 'd6'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19' && to_fy != from_fy){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19' && n_steel_From != n_steel_To){
                convertedValue = 1./ (19. * 19. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd22':
            if (toUnit === 'd6'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22' && to_fy != from_fy){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22' && n_steel_From != n_steel_To){
                convertedValue = 1./ (22. * 22. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd25':
            if (toUnit === 'd6'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25' && to_fy != from_fy){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25' && n_steel_From != n_steel_To){
                convertedValue = 1./ (25. * 25. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd29':
            if (toUnit === 'd6'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32'){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29' && to_fy != from_fy){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29' && n_steel_From != n_steel_To){
                convertedValue = 1./ (29. * 29. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;

        case 'd32':
            if (toUnit === 'd6'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (6. * 6. * n_steel_To * to_fy) * s_steel
            } else if (toUnit === 'd8'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (8. * 8. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd10'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (10. * 10. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd13'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (13. * 13. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd16'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (16. * 16. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd19'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (19. * 19. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd22'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (22. * 22. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd25'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (25. * 25. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd29'){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (29. * 29. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32' && to_fy != from_fy){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else if (toUnit === 'd32' && n_steel_From != n_steel_To){
                convertedValue = 1./ (32. * 32. * n_steel_From * from_fy) *  (32. * 32. * n_steel_To * to_fy) * s_steel
            }else{
                convertedValue = s_steel;
            }
        break;
    }
    document.getElementById('result_sengkang_kolom').value = Math.floor(convertedValue) + ' ' + resultUnit;
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
        "hasil hitung = " + Math.floor(convertedValue) + ' ' + resultUnit
    ;
}
