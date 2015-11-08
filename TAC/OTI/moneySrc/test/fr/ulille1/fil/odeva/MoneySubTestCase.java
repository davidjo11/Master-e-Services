package fr.ulille1.fil.odeva;

import junit.framework.TestCase;

public class MoneySubTestCase  extends TestCase{
	
	public MoneySubTestCase(String testname){
		super(testname);
	}
	
	private Money m1,m2,m3;
	private MoneyFactory mf;
	
	public void setUp() throws UnexistingCurrencyException{
		mf = MoneyFactory.getDefaultFactory();
		m1 = mf.createMoney(1, "EUR");
		m2 = mf.createMoney(2, "EUR");
		m3 = mf.createMoney(3, "CHF");
	}

	public void testSubWorks() throws UnexistingCurrencyException{
		Money expected = mf.createMoney(3, "EUR");
		Money result = MoneyOps.simpleSub(m2, m1);
		assertEquals(expected.getValue(), result.getValue());
		assertEquals(expected.getCurrency(), result.getCurrency());
	}
	
	public void testSubIncompatibleCurrencies() throws UnexistingCurrencyException{
		try{
			MoneyOps.simpleSub(m3, m2);
			fail("Currencies are not the same.");			
		}
		catch(IncompatibleCurrencyException e){
			
		}
	}
	
	public void testSubValueException() throws UnexistingCurrencyException{
		try{
			MoneyOps.simpleSub(m1, m2);
			fail("m1 is smaller than m2.");
		}catch(SubtractionImpossibleException e){
			
		}
	}
}
