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


	public Personne createPersonne(String name){
		return new Personne(name);
	}

	private class Personne{


		private String name;
		private Map<String, Integer> relation;

		public Personne(String name){
			this.name = name;
			this.relation = new HashMap<String, Integer>();
		}

		public void setTheme(String theme){
			if(relation.containsKey(theme)){
				this.relation.put(theme, this.relation.get(theme) + 1);
			}
			else this.relation.put(theme, 1);
		}

		public String getName(){
			return this.name;
		}

		public int getTimes(String theme){
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
		List<Personne> lp = new ArrayList<Personne>();

		PrintWriter names = null, themes = null, mut = null;
		Iterator<Personne> it;
		Iterator<String> itt;

		try{
			Scanner sc = new Scanner(new File(file));

			names = new PrintWriter("Names.txt");
			themes = new PrintWriter("Themes.txt");

			mut = new PrintWriter("MUT.txt");

			String line = "", name = "", theme = "";
			String[] values = null;
			int nbName = 0, nbThemes = 0;
			Personne p = null;
			while(sc.hasNextLine()){
				p = null;
				line = sc.nextLine();
				values = line.split(";");
				name = values[1];
				theme = values[2];

				if(!listName.contains(name)){
					listName.add(name);
					names.println(name);
					nbName++;
					p = e.createPersonne(name);
					lp.add(p);
				}
				else {
					it = lp.iterator();
					while(it.hasNext()){
						Personne aux = it.next();
						if(aux.getName().equals(name))
							p = aux;
					}
				}

				if(!listTheme.contains(theme)){
					listTheme.add(theme);
					themes.println(theme);
					nbThemes++;
				}
				p.setTheme(theme);
			}

			it = lp.iterator();
			itt = listTheme.iterator();
			String print = "";
			p = null;
			while(it.hasNext()){
				p = it.next();
				itt = listTheme.iterator();
				while(itt.hasNext()){
					theme = itt.next();
					print += " " + p.getTimes(theme) + " ";
				}
				mut.println(print);
				print = "";
			}

		}catch(Exception exp){
			System.out.println(exp.getMessage());
		}
		finally{
			themes.close();
			names.close();
			mut.close();
		}
	}

}
