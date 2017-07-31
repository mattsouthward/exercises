function convertToRoman(num) {
    // Start by repeating 'I' num times
    return 'I'.repeat(num).replace(/IIIII/g, 'V')      // Replace 5's (IIIII with V) case
                            .replace(/IIII/g, 'IV')    // Replace 4's (IIII with IV) case
                            .replace(/VV/g, 'X')       // Replace 10's (VV with X)
                            .replace(/VIV/g, 'IX')     // Replace 9's (VIV with IX)
                            .replace(/XXXXX/g, 'L')    // Replace 50's (XXXXX with L)
                            .replace(/XXXX/g, 'XL')    // Replace 40's (XXXX with XL)
                            .replace(/LL/g, 'C')       // Replace 100's (LL with C)
                            .replace(/LXL/g, 'XC')     // Replace 90's (LXL with XC)
                            .replace(/CCCCC/g, 'D' )   // Replace 500's (CCCCC with D)
                            .replace(/CCCC/g, 'CD')    // Replace 400's (CCCC with CD)
                            .replace(/DD/g, 'M')       // Replace 1000's (DD with M)
                            .replace(/DCD/g, 'CM');    // Replace 900's (DCD with CM)
}

convertToRoman(36);
