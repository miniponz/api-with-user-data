import { app } from '../src/favorites.js';
import './html-equal.js';
import './make-template.tests.js';
import './hash-query.tests.js';
import './make-search-url.tests.js';
import './convert-obj-to-array.tests.js';

QUnit.done(() => {
    app.delete();
});