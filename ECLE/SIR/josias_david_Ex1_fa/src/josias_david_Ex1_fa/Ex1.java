package josias_david_Ex1_fa;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Ex1 {


	public Relation createRelation(String name){
		return new Relation(name);
	}

	public double getDistanceJacquard(int[] t1, int[] t2){
		double union = 0, inter = 0, Mut2 = 0;
		for(int i=0; i<t1.length;i++){
			if(t1[i] == t2[i] && t1[i] == 1)
				inter++;
			if(t1[i] == 1 || t2[i] == 1)
				union++;
		}
		Mut2 = new Double(1.0-(inter/union));
		return Math.floor(Mut2*100)/100;
	}

	private class Relation{


		private String name;
		private Map<String, Integer> relation;

		public Relation(String name){
			this.name = name;
			this.relation = new HashMap<String, Integer>();
		}

		public void setKey(String theme){
			if(relation.containsKey(theme)){
				this.relation.put(theme, this.relation.get(theme) + 1);
			}
			else this.relation.put(theme, 1);
		}

		public String getName(){
			return this.name;
		}

		public int getValue(String theme){
			if(!this.relation.containsKey(theme))
				return 0;
			return this.relation.get(theme);
		}
	}


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Ex1 e = new Ex1();

		String file = args[0];
		List<String> listTheme = new ArrayList<String>();
		List<String> listName = new ArrayList<String>();
		List<Relation> lp = new ArrayList<Relation>();

		PrintWriter Readme = null, names = null, themes = null, Mut2 = null, Mut2_binaire = null, Mtt = null, Mtt_binaire = null, MutR = null;
		Iterator<Relation> it;
		Iterator<String> itt;
		int nbUsagers = 0, nbThemes = 0;
		int[][] mut2 = null, mut2_binaire = null, mtt_binaire  = null;
		double[][] mtt = null;

		try{
			Scanner sc = new Scanner(new File(file));

			//			names = new PrintWriter("Names.txt");
			//			themes = new PrintWriter("Themes.txt");

			Mut2 = new PrintWriter("Mut2.txt");

			String line = "", name = "", theme = "";
			String[] values = null;

			Relation r = null;
			while(sc.hasNextLine()){
				r = null;
				line = sc.nextLine();
				values = line.split(";");
				name = values[1];
				theme = values[2];

				if(!listName.contains(name)){
					listName.add(name);
					//					names.println(name);
					r = e.createRelation(name);
					nbUsagers++;
					lp.add(r);
				}
				else {
					it = lp.iterator();
					while(it.hasNext()){
						Relation aux = it.next();
						if(aux.getName().equals(name))
							r = aux;
					}
				}

				if(!listTheme.contains(theme)){
					listTheme.add(theme);
					//					themes.println(theme);
					nbThemes++;
				}
				r.setKey(theme);
			}

			//Matrice binaire
			Mut2_binaire = new PrintWriter("Mut2_binaire.txt");
			mut2_binaire = new int[nbThemes][nbUsagers];

			mut2 = new int[nbUsagers][nbThemes];

			int i = 0, j = 0;
			it = lp.iterator();
			itt = listTheme.iterator();
			String print = "";
			r = null;
			while(it.hasNext()){
				j = 0;
				r = it.next();
				itt = listTheme.iterator();
				while(itt.hasNext()){
					theme = itt.next();
					print += " " + r.getValue(theme) + " ";
					mut2[i][j] = r.getValue(theme);
					//On remplit la matrice binaire
					mut2_binaire[j++][i] = r.getValue(theme) == 0 ? 0 : 1;
				}
				Mut2.println(print);
				print = "";
				i++;
			}

			for(i=0;i<nbUsagers;i++){
				for(j=0;j<nbThemes;j++){
					Mut2_binaire.print(" " + mut2_binaire[j][i]+ " ");
				}
				Mut2_binaire.println();
			}
			//Fini Mut2_binaire


			//PArcours de la matrice binaire afin de remplir la matrice mtt
			Mtt_binaire = new PrintWriter("Mtt_binaire.txt");
			mtt_binaire = new int[nbThemes][nbThemes];

			//Matrice des distances des thÃ¨mes
			Mtt = new PrintWriter("Mtt.txt");
			mtt = new double[nbThemes][nbThemes];
			for(i=0;i<nbThemes;i++){
				for(j=i;j<nbThemes;j++){
					if(i == j){
						mtt[i][i] = 1;
						mtt_binaire[i][i] = 1;
					}
					else{
						double aux = e.getDistanceJacquard(mut2_binaire[i], mut2_binaire[j]);
						mtt[i][j] = aux;
						mtt_binaire[i][j] = mtt[i][j] < 0.5 ? 1 : 0;
					}
				}
			}

			boolean[] themesRecommandes = new boolean[nbThemes];
			for(i=0;i<nbThemes;i++)
				themesRecommandes[i] = false;
			
			
			for(i=0;i<nbThemes;i++){
				for(j=0;j<nbThemes;j++){
					if(j>i){
						Mtt.print(" " + mtt[i][j] + " ");
						Mtt_binaire.print(" " + mtt_binaire[i][j] + " ");						
					}
					else {
						Mtt.print("  X  ");
						Mtt_binaire.print(" X ");
					}
					if(mtt_binaire[i][j] == 1 && i != j){
						if(!themesRecommandes[i])
							themesRecommandes[i] =  true;
						if(!themesRecommandes[j])
							themesRecommandes[j] = true;
					}
				}
				Mtt.println();
				Mtt_binaire.println();
			}
			
			MutR = new PrintWriter("MutR.txt");

			Readme = new PrintWriter("README.txt");
			
			Readme.print("ANALYSE DES RECOMMANDATIONS:\n\n"
					+ "Grâce aux matrices MutR et Mut2, nous pouvons recommander:\n\n");
			
			for(i=0;i<nbUsagers;i++){
				for(j=0;j<nbThemes;j++){
					if(mut2[i][j] > 0 && themesRecommandes[j]){
						MutR.print(" 1 ");
						Readme.println("- le thème " + listTheme.get(j) +" à " + lp.get(i).getName() + ";\n");
					}
					else MutR.print(" 0 ");
				}
				MutR.println();
			}


			
		}catch(Exception exp){
			exp.printStackTrace();
		}
		finally{
			//			themes.close();
			//			names.close();
			Readme.close();
			Mut2.close();
			Mtt.close();
			Mtt_binaire.close();
			Mut2_binaire.close();
			MutR.close();
		}
	}

}
