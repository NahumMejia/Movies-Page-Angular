import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originLanguagePipe',
})
export class OriginLanguagePipe implements PipeTransform {
  transform(originLanguage: string): string {
    switch (originLanguage) {
      case 'en':
        originLanguage = '🇺🇸';
        break;
      case 'es':
        originLanguage = '🇪🇸';
        break;
      case 'fr':
        originLanguage = '🇫🇷';
        break;
      case 'de':
        originLanguage = '🇩🇪';
        break;
      case 'it':
        originLanguage = '🇮🇹';
        break;
      case 'ja':
        originLanguage = '🇯🇵';
        break;
      case 'ko':
        originLanguage = '🇰🇷';
        break;
      case 'zh':
        originLanguage = '🇨🇳';
        break;
      default:
        originLanguage = originLanguage.toUpperCase();
        break;
    }
    return originLanguage;
  }
}