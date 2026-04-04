import View from './View.js'

class ResultsView extends View{
    _parentElement = document.querySelector('.results');


    _generateMarkup(){
        
        return this._data.map(this._generateMarkupPreview).join('');
;
    }
    _generateMarkupPreview(prev)
    {
        return `<li class="preview">
            <a class="preview__link" href="#${prev.id}">
              <figure class="preview__fig">
                <img src="${prev.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${prev.title}</h4>
                <p class="preview__publisher">${prev.publisher}</p>

              </div>
            </a>
          </li>`

            ;
    }
}


export default new ResultsView();