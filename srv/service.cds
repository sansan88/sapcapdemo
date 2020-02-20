	using qperior.demo as qperiordemo from '../db/schema';

	service CatalogService @(requires:'iamrootrole'){
	    entity Books as projection on qperiordemo.Books;
	    entity Authors as projection on qperiordemo.Authors;
	}
