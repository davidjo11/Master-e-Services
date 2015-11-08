package fr.ulille1.fil.odeva;

import junit.framework.TestResult;
import junit.framework.TestSuite;

public class AllTests{
	public static void main(String args[]){
		TestSuite suiteAdd = new TestSuite(MoneyAddTestCase.class);
		TestResult resAdd = new TestResult();
		suiteAdd.run(resAdd);
		
		TestSuite suiteSub = new TestSuite(MoneySubTestCase.class);
		TestResult resSub = new TestResult();
		suiteSub.run(resSub);
//		AllTests suite= new AllTests();
//		suite.addTest(new MoneyAddTestCase("testSimpleAdd"));
//		suite.addTest(new MoneyAddTestCase("testSimpleAddIncompatible"));
//		suite.addTest(new MoneySubTestCase("testSubWorks"));
//		suite.addTest(new MoneySubTestCase("testSubIncompatibleCurrencies"));
//		suite.addTest(new MoneySubTestCase("testSubValueException"));
//		TestResult result= suite.;
	}
}
