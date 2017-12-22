function convertBinToText(text)
{
    //-----Si encuentra la letra en binario, la retorna-------------
    this.retunLetter = function(binaryStr)
    {
        letter = '';

        switch(binaryStr)
        {
            case '\n':
                letter = '00001010'
                break;
            case ' ':
                letter = '00100000';
                break;
            case '!':
                letter = '00100001';
                break;
            case '"':
                letter = '00100010';
                break;
            case '#':
                letter = '00100011';
                break;
            case '$':
                letter = '00100100';
                break;
            case '%':
                letter = '00100101';
                break;
            case '&':
                letter = '00100110';
                break;
            case "'":
                letter = '00100111';
                break;
            case '(':
                letter = '00101000';
                break;
            case ')':
                letter = '00101001';
                break;
            case '*':
                letter = '00101010';
                break;
            case '+':
                letter = '00101011';
                break;
            case ',':
                letter = '00101100';
                break;
            case '-':
                letter = '00101101';
                break;
            case '.':
                letter = '00101110';
                break;
            case '/':
                letter = '00101111';
                break;
            case '0':
                letter = '00110000';
                break;
            case '1':
                letter = '00110001';
                break;
            case '2':
                letter = '00110010';
                break;
            case '3':
                letter = '00110011';
                break;
            case '4':
                letter = '00110100';
                break;
            case '5':
                letter = '00110101';
                break;
            case '6':
                letter = '00110110';
                break;
            case '7':
                letter = '00110111';
                break;
            case '8':
                letter = '00111000';
                break;
            case '9':
                letter = '00111001';
                break;
            case ':':
                letter = '00111010';
                break;
            case ';':
                letter = '00111011';
                break;
            case '<':
                letter = '00111100';
                break;
            case '=':
                letter = '00111101';
                break;
            case '>':
                letter = '00111110';
                break;
            case '?':
                letter = '00111111';
                break;
            case '@':
                letter = '01000000';
                break;
            case 'A':
                letter = '01000001';
                break;
            case 'B':
                letter = '01000010';
                break;
            case 'C':
                letter = '01000011';
                break;
            case 'D':
                letter = '01000100';
                break;
            case 'E':
                letter = '01000101';
                break;
            case 'F':
                letter = '01000110';
                break;
            case 'G':
                letter = '01000111';
                break;
            case 'H':
                letter = '01001000';
                break;
            case 'I':
                letter = '01001001';
                break;
            case 'J':
                letter = '01001010';
                break;
            case 'K':
                letter = '01001011';
                break;
            case 'L':
                letter = '01001100';
                break;
            case 'M':
                letter = '01001101';
                break;
            case 'N':
                letter = '01001110';
                break;
            case 'Ñ':
                letter = '11010001';
                break;
            case 'O':
                letter = '01001111';
                break;
            case 'P':
                letter = '01010000';
                break;
            case 'Q':
                letter = '01010001';
                break;
            case 'R':
                letter = '01010010';
                break;
            case 'S':
                letter = '01010011';
                break;
            case 'T':
                letter = '01010100';
                break;
            case 'U':
                letter = '01010101';
                break;
            case 'V':
                letter = '01010110';
                break;
            case 'W':
                letter = '01010111';
                break;
            case 'X':
                letter = '01011000';
                break;
            case 'Y':
                letter = '01011001';
                break;
            case 'Z':
                letter = '01011010';
                break;
            case '[':
                letter = '01011011';
                break;
            case '\\':
                letter = '01011100';
                break;
            case ']':
                letter = '01011101';
                break;
            case '^':
                letter = '01011110';
                break;
            case '_':
                letter = '01011111';
                break;
            case '`':
                letter = '01100000';
                break;
            case 'a':
                letter = '01100001';
                break;
            case 'b':
                letter = '01100010';
                break;
            case 'c':
                letter = '01100011';
                break;
            case 'd':
                letter = '01100100';
                break;
            case 'e':
                letter = '01100101';
                break;
            case 'f':
                letter = '01100110';
                break;
            case 'g':
                letter = '01100111';
                break;
            case 'h':
                letter = '01101000';
                break;
            case 'i':
                letter = '01101001';
                break;
            case 'j':
                letter = '01101010';
                break;
            case 'k':
                letter = '01101011';
                break;
            case 'l':
                letter = '01101100';
                break;
            case 'm':
                letter = '01101101';
                break;
            case 'n':
                letter = '01101110';
                break;
            case 'ñ':
                letter = '11110001';
                break;
            case 'o':
                letter = '01101111';
                break;
            case 'p':
                letter = '01110000';
                break;
            case 'q':
                letter = '01110001';
                break;
            case 'r':
                letter = '01110010';
                break;
            case 's':
                letter = '01110011';
                break;
            case 't':
                letter = '01110100';
                break;
            case 'u':
                letter = '01110101';
                break;
            case 'v':
                letter = '01110110';
                break;
            case 'w':
                letter = '01110111';
                break;
            case 'x':
                letter = '01111000';
                break;
            case 'y':
                letter = '01111001';
                break;
            case 'z':
                letter = '01111010';
                break;
            case '{':
                letter = '01111011';
                break;
            case '|':
                letter = '01111100';
                break;  
            case '}':
                letter = '01111101';
                break;
            case '~':
                letter = '01111110';
                break;
            case '¡':
                letter = '10100001';
                break;
            case '¢':
                letter = '10100010';
                break;
            case '£':
                letter = '10100011';
                break;
            case '¤':
                letter = '10100100';
                break;
            case '¥':
                letter = '10100101';
                break;
            case '¦':
                letter = '10100110';
                break;
            case '§':
                letter = '10100111';
                break;
            case '¨':
                letter = '10101000';
                break;
            case '©':
                letter = '10101001';
                break;
            case 'ª':
                letter = '10101010';
                break;
            case '«':
                letter = '10101011';
                break;
            case '¬':
                letter = '10101100';
                break;
            case ' ':
                letter = '10101101';
                break;
            case '®':
                letter = '10101110';
                break;
            case '¯':
                letter = '10101111';
                break;
            case '°':
                letter = '10110000';
                break;
            case '±':
                letter = '10110001';
                break;
            case '²':
                letter = '10110010';
                break;
            case '³':
                letter = '10110011';
                break;
            case '´':
                letter = '10110100';
                break;
            case 'µ':
                letter = '10110101';
                break;
            case '¶':
                letter = '10110110';
                break;
            case '·':
                letter = '10110111';
                break;
            case '¸':
                letter = '10111000';
                break;
            case '¹':
                letter = '10111001';
                break;
            case 'º':
                letter = '10111010';
                break;
            case '»':
                letter = '10111011';
                break;
            case '¼':
                letter = '10111100';
                break;
            case '½':
                letter = '10111101';
                break;
            case '¾':
                letter = '10111110';
                break;
            case '¿':
                letter = '10111111';
                break;
            case 'À':
                letter = '11000000';
                break;
            case 'Á':
                letter = '11000001';
                break;
            case 'Â':
                letter = '11000010';
                break;
            case 'Ã':
                letter = '11000011';
                break;
            case 'Ä':
                letter = '11000100';
                break;
            case 'Å':
                letter = '11000101';
                break;
            case 'Æ':
                letter = '11000110';
                break;
            case 'Ç':
                letter = '11000111';
                break;
            case 'È':
                letter = '11001000';
                break;
            case 'É':
                letter = '11001001';
                break;
            case 'Ê':
                letter = '11001010';
                break;
            case 'Ë':
                letter = '11001011';
                break;
            case 'Ì':
                letter = '11001100';
                break;
            case 'Í':
                letter = '11001101';
                break;
            case 'Î':
                letter = '11001110';
                break;
            case 'Ï':
                letter = '11001111';
                break;
            case 'Ð':
                letter = '11010000';
                break;
            case 'Ñ':
                letter = '11010001';
                break;
            case 'Ò':
                letter = '11010010';
                break;
            case 'Ó':
                letter = '11010011';
                break;
            case 'Ô':
                letter = '11010100';
                break;
            case 'Õ':
                letter = '11010101';
                break;
            case 'Ö':
                letter = '11010110';
                break;
            case '×':
                letter = '11010111';
                break;
            case 'Ø':
                letter = '11011000';
                break;
            case 'Ù':
                letter = '11011001';
                break;
            case 'Ú':
                letter = '11011010';
                break;
            case 'Û':
                letter = '11011011';
                break;
            case 'Ü':
                letter = '11011100';
                break;
            case 'Ý':
                letter = '11011101';
                break;
            case 'Þ':
                letter = '11011110';
                break;
            case 'ß':
                letter = '11011111';
                break;
            case 'à':
                letter = '11100000';
                break;
            case 'á':
                letter = '11100001';
                break;
            case 'â':
                letter = '11100010';
                break;
            case 'ã':
                letter = '11100011';
                break;
            case 'ä':
                letter = '11100100';
                break;
            case 'å':
                letter = '11100101';
                break;
            case 'æ':
                letter = '11100110';
                break;
            case 'ç':
                letter = '11100111';
                break;
            case 'è':
                letter = '11101000';
                break;
            case 'é':
                letter = '11101001';
                break;
            case 'ê':
                letter = '11101010';
                break;
            case 'ë':
                letter = '11101011';
                break;
            case 'ì':
                letter = '11101100';
                break;
            case 'í':
                letter = '11101101';
                break;
            case 'î':
                letter = '11101110';
                break;
            case 'ï':
                letter = '11101111';
                break;
            case 'ð':
                letter = '11110000';
                break;
            case 'ñ':
                letter = '11110001';
                break;
            case 'ò':
                letter = '11110010';
                break;
            case 'ó':
                letter = '11110011';
                break;
            case 'ô':
                letter = '11110100';
                break;
            case 'õ':
                letter = '11110101';
                break;
            case 'ö':
                letter = '11110110';
                break;
            case '÷':
                letter = '11110111';
                break;
            case 'ø':
                letter = '11111000';
                break;
            case 'ù':
                letter = '11111001';
                break;
            case 'ú':
                letter = '11111010';
                break;
            case 'û':
                letter = '11111011';
                break;
            case 'ü':
                letter = '11111100';
                break;
            case 'ý':
                letter = '11111101';
                break;
            case 'þ':
                letter = '11111110';
                break;
            case 'ÿ':
                letter = '11111111';
                break;
        }
        return letter;
    }

    if(text == '')
        return 'Ingresa el codigo binario';
    else
    {
        string = '';

        pos = 0;

        for(pos = 0; pos < text.length; pos++)
        {
            string += this.retunLetter(text[pos]);
            string += ' ';
        }

        return string;
    }
}
