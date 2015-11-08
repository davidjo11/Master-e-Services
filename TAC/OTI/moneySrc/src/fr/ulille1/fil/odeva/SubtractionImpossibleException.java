package fr.ulille1.fil.odeva;

public class SubtractionImpossibleException extends RuntimeException {
	SubtractionImpossibleException(String m1,String m2) {
		super("You cannot subtract " + m2 + "to " + m1 + "because " + m2 + " is greater.");
	}
}
