function convertBinToText(text)
{
    //-------------Quita elementos que no sean ceros o unos-------------
    text = text.replace(/\s/g, "");
    text = text.replace(/[^01]/g, "");

    //-------------Si encuentra la letra en binario, la retorna-------------
    this.retunLetter = function(binaryStr)
    {
        letter = '';

        switch(binaryStr)
        {
            case '00001010':
                letter = '\n';
                break;
            case '00100000':
                letter = ' ';
                break;
            case '00100001':
                letter = '!';
                break;
            case '00100010':
                letter = '"';
                break;
            case '00100011':
                letter = '#';
                break;
            case '00100100':
                letter = '$';
                break;
            case '00100101':
                letter = '%';
                break;
            case '00100110':
                letter = '&';
                break;
            case '00100111':
                letter = "'";
                break;
            case '00101000':
                letter = '(';
                break;
            case '00101001':
                letter = ')';
                break;
            case '00101010':
                letter = '*';
                break;
            case '00101011':
                letter = '+';
                break;
            case '00101100':
                letter = ',';
                break;
            case '00101101':
                letter = '-';
                break;
            case '00101110':
                letter = '.';
                break;
            case '00101111':
                letter = '/';
                break;
            case '00110000':
                letter = '0';
                break;
            case '00110001':
                letter = '1';
                break;
            case '00110010':
                letter = '2';
                break;
            case '00110011':
                letter = '3';
                break;
            case '00110100':
                letter = '4';
                break;
            case '00110101':
                letter = '5';
                break;
            case '00110110':
                letter = '6';
                break;
            case '00110111':
                letter = '7';
                break;
            case '00111000':
                letter = '8';
                break;
            case '00111001':
                letter = '9';
                break;
            case '00111010':
                letter = ':';
                break;
            case '00111011':
                letter = ';';
                break;
            case '00111100':
                letter = '<';
                break;
            case '00111101':
                letter = '=';
                break;
            case '00111110':
                letter = '>';
                break;
            case '00111111':
                letter = '?';
                break;
            case '01000000':
                letter = '@';
                break;
            case '01000001':
                letter = 'A';
                break;
            case '01000010':
                letter = 'B';
                break;
            case '01000011':
                letter = 'C';
                break;
            case '01000100':
                letter = 'D';
                break;
            case '01000101':
                letter = 'E';
                break;
            case '01000110':
                letter = 'F';
                break;
            case '01000111':
                letter = 'G';
                break;
            case '01001000':
                letter = 'H';
                break;
            case '01001001':
                letter = 'I';
                break;
            case '01001010':
                letter = 'J';
                break;
            case '01001011':
                letter = 'K';
                break;
            case '01001100':
                letter = 'L';
                break;
            case '01001101':
                letter = 'M';
                break;
            case '01001110':
                letter = 'N';
                break;
            case '11010001':
                letter = 'Ñ';
                break;
            case '01001111':
                letter = 'O';
                break;
            case '01010000':
                letter = 'P';
                break;
            case '01010001':
                letter = 'Q';
                break;
            case '01010010':
                letter = 'R';
                break;
            case '01010011':
                letter = 'S';
                break;
            case '01010100':
                letter = 'T';
                break;
            case '01010101':
                letter = 'U';
                break;
            case '01010110':
                letter = 'V';
                break;
            case '01010111':
                letter = 'W';
                break;
            case '01011000':
                letter = 'X';
                break;
            case '01011001':
                letter = 'Y';
                break;
            case '01011010':
                letter = 'Z';
                break;
            case '01011011':
                letter = '[';
                break;
            case '01011100':
                letter = '\\';
                break;
            case '01011101':
                letter = ']';
                break;
            case '01011110':
                letter = '^';
                break;
            case '01011111':
                letter = '_';
                break;
            case '01100000':
                letter = '`';
                break;
            case '01100001':
                letter = 'a';
                break;
            case '01100010':
                letter = 'b';
                break;
            case '01100011':
                letter = 'c';
                break;
            case '01100100':
                letter = 'd';
                break;
            case '01100101':
                letter = 'e';
                break;
            case '01100110':
                letter = 'f';
                break;
            case '01100111':
                letter = 'g';
                break;
            case '01101000':
                letter = 'h';
                break;
            case '01101001':
                letter = 'i';
                break;
            case '01101010':
                letter = 'j';
                break;
            case '01101011':
                letter = 'k';
                break;
            case '01101100':
                letter = 'l';
                break;
            case '01101101':
                letter = 'm';
                break;
            case '01101110':
                letter = 'n';
                break;
            case '11110001':
                letter = 'ñ';
                break;
            case '01101111':
                letter = 'o';
                break;
            case '01110000':
                letter = 'p';
                break;
            case '01110001':
                letter = 'q';
                break;
            case '01110010':
                letter = 'r';
                break;
            case '01110011':
                letter = 's';
                break;
            case '01110100':
                letter = 't';
                break;
            case '01110101':
                letter = 'u';
                break;
            case '01110110':
                letter = 'v';
                break;
            case '01110111':
                letter = 'w';
                break;
            case '01111000':
                letter = 'x';
                break;
            case '01111001':
                letter = 'y';
                break;
            case '01111010':
                letter = 'z';
                break;
            case '01111011':
                letter = '{';
                break;
            case '01111100':
                letter = '|';
                break;
            case '01111101':
                letter = '}';
                break;
            case '01111110':
                letter = '~';
                break;
            case '10100001':
                letter = '¡';
                break;
            case '10100010':
                letter = '¢';
                break;
            case '10100011':
                letter = '£';
                break;
            case '10100100':
                letter = '¤';
                break;
            case '10100101':
                letter = '¥';
                break;
            case '10100110':
                letter = '¦';
                break;
            case '10100111':
                letter = '§';
                break;
            case '10101000':
                letter = '¨';
                break;
            case '10101001':
                letter = '©';
                break;
            case '10101010':
                letter = 'ª';
                break;
            case '10101011':
                letter = '«';
                break;
            case '10101100':
                letter = '¬';
                break;
            case '10101101':
                letter = ' ';
                break;
            case '10101110':
                letter = '®';
                break;
            case '10101111':
                letter = '¯';
                break;
            case '10110000':
                letter = '°';
                break;
            case '10110001':
                letter = '±';
                break;
            case '10110010':
                letter = '²';
                break;
            case '10110011':
                letter = '³';
                break;
            case '10110100':
                letter = '´';
                break;
            case '10110101':
                letter = 'µ';
                break;
            case '10110110':
                letter = '¶';
                break;
            case '10110111':
                letter = '·';
                break;
            case '10111000':
                letter = '¸';
                break;
            case '10111001':
                letter = '¹';
                break;
            case '10111010':
                letter = 'º';
                break;
            case '10111011':
                letter = '»';
                break;
            case '10111100':
                letter = '¼';
                break;
            case '10111101':
                letter = '½';
                break;
            case '10111110':
                letter = '¾';
                break;
            case '10111111':
                letter = '¿';
                break;
            case '11000000':
                letter = 'À';
                break;
            case '11000001':
                letter = 'Á';
                break;
            case '11000010':
                letter = 'Â';
                break;
            case '11000011':
                letter = 'Ã';
                break;
            case '11000100':
                letter = 'Ä';
                break;
            case '11000101':
                letter = 'Å';
                break;
            case '11000110':
                letter = 'Æ';
                break;
            case '11000111':
                letter = 'Ç';
                break;
            case '11001000':
                letter = 'È';
                break;
            case '11001001':
                letter = 'É';
                break;
            case '11001010':
                letter = 'Ê';
                break;
            case '11001011':
                letter = 'Ë';
                break;
            case '11001100':
                letter = 'Ì';
                break;
            case '11001101':
                letter = 'Í';
                break;
            case '11001110':
                letter = 'Î';
                break;
            case '11001111':
                letter = 'Ï';
                break;
            case '11010000':
                letter = 'Ð';
                break;
            case '11010001':
                letter = 'Ñ';
                break;
            case '11010010':
                letter = 'Ò';
                break;
            case '11010011':
                letter = 'Ó';
                break;
            case '11010100':
                letter = 'Ô';
                break;
            case '11010101':
                letter = 'Õ';
                break;
            case '11010110':
                letter = 'Ö';
                break;
            case '11010111':
                letter = '×';
                break;
            case '11011000':
                letter = 'Ø';
                break;
            case '11011001':
                letter = 'Ù';
                break;
            case '11011010':
                letter = 'Ú';
                break;
            case '11011011':
                letter = 'Û';
                break;
            case '11011100':
                letter = 'Ü';
                break;
            case '11011101':
                letter = 'Ý';
                break;
            case '11011110':
                letter = 'Þ';
                break;
            case '11011111':
                letter = 'ß';
                break;
            case '11100000':
                letter = 'à';
                break;
            case '11100001':
                letter = 'á';
                break;
            case '11100010':
                letter = 'â';
                break;
            case '11100011':
                letter = 'ã';
                break;
            case '11100100':
                letter = 'ä';
                break;
            case '11100101':
                letter = 'å';
                break;
            case '11100110':
                letter = 'æ';
                break;
            case '11100111':
                letter = 'ç';
                break;
            case '11101000':
                letter = 'è';
                break;
            case '11101001':
                letter = 'é';
                break;
            case '11101010':
                letter = 'ê';
                break;
            case '11101011':
                letter = 'ë';
                break;
            case '11101100':
                letter = 'ì';
                break;
            case '11101101':
                letter = 'í';
                break;
            case '11101110':
                letter = 'î';
                break;
            case '11101111':
                letter = 'ï';
                break;
            case '11110000':
                letter = 'ð';
                break;
            case '11110001':
                letter = 'ñ';
                break;
            case '11110010':
                letter = 'ò';
                break;
            case '11110011':
                letter = 'ó';
                break;
            case '11110100':
                letter = 'ô';
                break;
            case '11110101':
                letter = 'õ';
                break;
            case '11110110':
                letter = 'ö';
                break;
            case '11110111':
                letter = '÷';
                break;
            case '11111000':
                letter = 'ø';
                break;
            case '11111001':
                letter = 'ù';
                break;
            case '11111010':
                letter = 'ú';
                break;
            case '11111011':
                letter = 'û';
                break;
            case '11111100':
                letter = 'ü';
                break;
            case '11111101':
                letter = 'ý';
                break;
            case '11111110':
                letter = 'þ';
                break;
            case '11111111':
                letter = 'ÿ';
                break;
        }
        return letter;
    }

    if((text.length % 8) != 0)
    {
        return 'La cantidad binaria debe ser divisible entre 8';
    }
    else if(text == '')
    {
        return 'Ingresa el codigo binario';
    }
    else if(text.length % 8 == 0)
    {
        string = '';

        pos = 0;

        for(pos = 0; pos < (text.length); pos += 8)
        {
            binTxt = text.substring(pos, pos + 8);
            string += this.retunLetter(binTxt);
        }

        return string;
    }
}
