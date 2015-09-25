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
		double union = 0, inter = 0, res = 0;
		for(int i=0; i<t1.length;i++){
			if(t1[i] == t2[i] && t1[i] == 1)
				inter++;
			if(t1[i] == 1 || t2[i] == 1)
				union++;
		}
		res = new Double(1.0-(inter/union));
		return Math.floor(res*100)/100;
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

		PrintWriter names = null, themes = null, res = null, Mut2_binaire = null, Mtt = null, Mtt_binaire = null, MutR = null;
		Iterator<Relation> it;
		Iterator<String> itt;
		int nbUsagers = 0, nbTheme = 0;
		int[][] mut2_binaire = null, mtt_binaire  = null;
		double[][] mtt = null;
		
		try{
			Scanner sc = new Scanner(new File(file));

//			names = new PrintWriter("Names.txt");
//			themes = new PrintWriter("Themes.txt");

			res = new PrintWriter("Mut2.txt");

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
					nbTheme++;
				}
				r.setKey(theme);
			}

			//Matrice binaire
			Mut2_binaire = new PrintWriter("Mut2_binaire.txt");
			mut2_binaire = new int[nbTheme][nbUsagers];
			System.out.println(nbTheme + "/" + nbUsagers);

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
					//On rempli la matrice binaire
					if(i>=9)
					System.out.println("i" + i);
					if(j>=9)
					System.out.println("j" +j);
					mut2_binaire[j++][i] = r.getValue(theme) == 0 ? 0 : 1;
				}
				res.println(print);
				print = "";
				i++;
			}

			
			 
			 
			 
			 
			 
			￼ 
			1,17 Go (7 %) utilisés sur 15 Go
			Gérer
			Conditions d'utilisation - Confidentialité
			Dernière activité sur le compte : Il y a 29 minutes
			Détails
			Contacts (3)
			imane khemici
			Ajouter aux cercles
			￼￼
			Afficher les détails
			￼
			￼￼
			Police ‪(Ctrl-Maj-5, Ctrl-Maj-6)‬
			for(i=0;i<nbUsagers;i++){
				for(j=0;j<nbTheme;j++){
					Mut2_binaire.print(" " + mut2_binaire[j][i]+ " ");
				}
				Mut2_binaire.println();
			}
			//Fini Mut2_binaire
//			Mut2_binaire.close();

			
			//PArcours de la matrice binaire afin de remplir la matrice mtt
			Mtt_binaire = new PrintWriter("Mtt_binaire.txt");
			mtt_binaire = new int[nbTheme][nbTheme];
			
			//Matrice des distances des thèmes
			Mtt = new PrintWriter("Mtt.txt");
			mtt = new double[nbTheme][nbTheme];
			for(i=0;i<nbTheme;i++){
				for(j=i;j<nbTheme;j++){
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
			
			for(i=0;i<nbTheme;i++){
				for(j=0;j<nbTheme;j++){
					Mtt.print(" " + mtt[i][j] + " ");
					Mtt_binaire.print(" " + mtt_binaire[i][j] + " ");
				}
				Mtt.println();
				Mtt_binaire.println();
			}

			res.close();
			Mtt.close();
			Mtt_binaire.close();
			Mut2_binaire.close();
			
		}catch(Exception exp){
			exp.printStackTrace();
		}
		finally{
//			themes.close();
//			names.close();
			
		}
	}

}
