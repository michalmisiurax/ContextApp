1. Utwórz komponent funkcyjny Banner który wyświetla tekst przekazany przez propsy
2. Utwórz komponent funkcyjny Button który przyjmuje jako props - children tekst wpisany w miejscu renderu komponentu oraz powinien obsługiwać zdarzenie onClick, po wcisnięciu przycisku powinno wyswietlic alert, że button został wcisnięty
3. Utwórz komponent Link który wyświetla link <a> wystylowany jak button - przyjmuje za props link oraz tekst jako children.
4. Utwórz komponent Input który zawiera stan "value", po wpisaniu w input tekstu powinien zostać wyświetlony podgląd wpisanego tekstu
5. Utwórz komponent Form który zawiera input oraz button. Po wpisaniu w input tekstu powinien zostać wyświetlony podgląd wpisanego tekstu. Po kliknięciu w button powinien wyskakować alert z wpisanym w input tekstem.
6. Utwórz komponent List który wyświetla liste elementów (komponentów ListItem - mają być oddzielnym elementem), lista ma byc przechowywana jako stan komponentu i pobierana z fake API po odpaleniu useEffect
7. Utwórz komponent EffectButton który zawiera swój stan, po wcisnięciu przycisk powinien stan zwiekszyć się o 1 oraz powinno wyswietlac po kazdej zmianie stanu log w konsoli
8. Utwórz komponent SuperInput który zawiera button oraz input, za pomoca useRef po wcisnieciu przycisku powinno focusowac input
